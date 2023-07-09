import { useFormik } from "formik";
import MainGrid from "../../../_cloner/helpers/components/MainGrid";
import InformationBillanding from "./components/InformationBillanding";
import {
    useGetBillandingDetail,
    useReceiptBilllanding,
} from "./core/_hooks";
import Input from "../../../_cloner/helpers/components/Modules/Input";
import { FC, useCallback, useRef, useState } from "react";
import ProfessionalSelect from "../../../_cloner/helpers/components/Modules/ProfeesionalSelect";
import { billlandingCarsSelectionGrid } from "../../../_cloner/helpers/grid-value/billlanding-cars-selection";
import ReceiptTypeOptions from "../../../_cloner/helpers/value-helper/receipt-type.json";
import { dropdownReceipt } from "../../../_cloner/helpers/dropdownValue1";

interface IProps {
    isExit?: boolean;
    isCancel?: boolean;
}

const ReceiptBilllannding: FC<IProps> = ({ isExit, isCancel }) => {
    const [receiptType, setReceiptType] = useState({
        value: 2,
        label: "تحویل قطعی",
    });
    const [selectedCars, setSelectedCars] = useState([]);
    const [desc, setDesc] = useState("");

    const gridRef = useRef(null);

    const receiptChangeOption = (selectedOption: any) =>
        setReceiptType(selectedOption);

    const { mutate, data: billlanding } = useGetBillandingDetail();
    const { mutate: receipt, data: receiptData } = useReceiptBilllanding();

    const onSelectionChanged = useCallback((event: any) => {
        setSelectedCars(event.api.getSelectedRows());
        // eslint-disable-next-line
    }, []);

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
            cars: selectedCars.map((item: any) => ({
                description: desc,
                id: item.id,
                deliveryStatus: receiptType.value,
            })),
        };
        receipt(formData);
    };

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
                    columnDefs={billlandingCarsSelectionGrid()}
                    rowSelection={"multiple"}
                    rowMultiSelectWithClick={true}
                    ref={gridRef}
                    onSelectionChanged={onSelectionChanged}
                />
            </div>
            <div className="w-50">
                <ProfessionalSelect
                    custom={true}
                    options={dropdownReceipt(ReceiptTypeOptions)}
                    onChange={receiptChangeOption}
                    name="driverOption"
                    title="نوع تحویل"
                    placeholder=""
                />
            </div>
            <Input
                title="توضیحات"
                value={desc}
                onChange={(e: any) => setDesc(e.target.value)}
                reqular
            />
            <div className="mt-4">
                <button
                    onClick={handleTransfer}
                    className="rounded-lg bg-green-500 px-8 py-4 text-white"
                >
                    ثبت رسید
                </button>
            </div>
        </>
    );
};
export default ReceiptBilllannding;