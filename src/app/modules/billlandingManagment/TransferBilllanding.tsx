import { useFormik } from "formik";
import MainGrid from "../../../_cloner/helpers/components/MainGrid";
import { billlandingCarsGrid } from "../../../_cloner/helpers/grid-value/billlanding-cars";
import InformationBillanding from "./components/InformationBillanding";
import { useGetBillandingDetail, useTransferBilllanding } from "./core/_hooks";
import Input from "../../../_cloner/helpers/components/Modules/Input";
import Modal from "../../../_cloner/helpers/Modal";
import { FC, useState } from "react";
import { useDrivers, usePlateList } from "../../../_cloner/hooks/_hooks";
import {
    dropdownDrivers,
    dropdownPlates,
} from "../../../_cloner/helpers/dropdownValue1";
import ProfessionalSelect from "../../../_cloner/helpers/components/Modules/ProfeesionalSelect";
import { Driver } from "./core/_models";

interface IProps {
    isExit?: boolean;
    isCancel?: boolean;
}

const TransferBilllannding: FC<IProps> = ({ isExit, isCancel }) => {
    const [driverValue, setDriverValue] = useState<Driver>();
    const [plateValue, setPlateValue] = useState({});
    const [desc, setDesc] = useState('')

    const { data: drivers } = useDrivers();
    const { data: plates } = usePlateList();
    const driverChange = (selected: any) => {
        setDriverValue(selected);
        const findPlate = plates?.find(
            (item: any) => item.id == selected?.plateId
        );
        setPlateValue({ value: findPlate.id, label: findPlate.platE_NO });
    };
    const plateChange = (selected: any) => setPlateValue(selected);

    const { mutate, data: billlanding } = useGetBillandingDetail();
    const { mutate: transfer, data: transferData } = useTransferBilllanding();


    const initialValues = {
        search: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            try {
                mutate(Number(values.search));
                setSubmitting(false);
            } catch (error) {
                setStatus("اطلاعات ورود نادرست می باشد");
                setSubmitting(false);
            }
        },
    });

    const handleTransfer = () => {
        const formData = {
            billLandingId: billlanding?.id,
            newDriverId: driverValue?.value,
            description: desc
        }
        transfer(formData)
    }


    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <form
                    className="flex items-center justify-center"
                    onSubmit={formik.handleSubmit}
                >
                    <Input
                        getFieldProps={formik.getFieldProps}
                        touched={formik.touched.search}
                        errors={formik.errors.search}
                        onChange={formik.handleChange}
                        name={"search"}
                        type="number"
                        title="شماره حواله"
                    />
                    <button className="m-2 mt-6 rounded-md bg-indigo-600 p-2 text-white">
                        جستجو
                    </button>
                </form>
            </div>
            <div className="grid grid-cols-5 gap-x-2 gap-y-2">
                <InformationBillanding
                    title="شماره حواله"
                    description={billlanding?.id}
                />
                <InformationBillanding
                    title="تاریخ ثبت حواله"
                    description={billlanding?.shamsiAddedDate}
                />
                <InformationBillanding
                    title="بارنامه جاده ای"
                    description={billlanding?.billlandingSerial}
                />
                <InformationBillanding
                    title="پیمانکار حمل"
                    description={billlanding?.contractorName}
                />
                <InformationBillanding
                    title="راننده"
                    description={billlanding?.driverName}
                />
                <InformationBillanding
                    title="کدملی"
                    description={billlanding?.driverNationalId}
                />
                <InformationBillanding
                    title="شماره پلاک انتظامی"
                    description={billlanding?.id}
                />
                <InformationBillanding
                    title="مبدا"
                    description={billlanding?.plateNo}
                />
                <InformationBillanding
                    title="مقصد"
                    description={billlanding?.originDesc}
                />
                <InformationBillanding
                    title="نوع حمل"
                    description={billlanding?.destinationdesc}
                />
                <InformationBillanding
                    title="وضعیت حواله"
                    description={billlanding?.billLandingStatusDesc}
                />
                <InformationBillanding
                    title="توضیحات"
                    description={
                        billlanding?.description !== null
                            ? billlanding?.description
                            : "تعریف نشده"
                    }
                    className="col-span-4"
                />
            </div>
            <div>
                <MainGrid
                    data={billlanding?.cars}
                    columnDefs={billlandingCarsGrid()}
                />
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8">
                <ProfessionalSelect
                    custom={true}
                    options={dropdownDrivers(drivers)}
                    onChange={driverChange}
                    name="driverOption"
                    title="رانندگان"
                    placeholder=""
                />
                <ProfessionalSelect
                    custom={true}
                    options={dropdownPlates(plates)}
                    onChange={plateChange}
                    value={plateValue}
                    name="plateOption"
                    title="شماره انتظامی"
                    placeholder=""
                />
                <Input title='توضیحات' value={desc} onChange={(e: any) => setDesc(e.target.value)} reqular/>
                <div className="mt-4">
                    <button onClick={handleTransfer} className="text-white px-8 py-4 bg-green-500 rounded-lg">ثبت انتقال</button>
                </div>
            </div>

        </>
    );
};

export default TransferBilllannding;