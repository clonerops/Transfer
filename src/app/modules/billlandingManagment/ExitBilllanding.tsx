import { useFormik } from "formik";
import MainGrid from "../../../_cloner/helpers/components/MainGrid";
import { billlandingCarsGrid } from "../../../_cloner/helpers/grid-value/billlanding-cars";
import InformationBillanding from "./components/InformationBillanding";
import { useExitBilllanding, useGetBillandingDetail } from "./core/_hooks";
import Input from "../../../_cloner/helpers/components/Modules/Input";
import Modal from "../../../_cloner/helpers/Modal";
import { useState } from "react";

const ExitBilllannding = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const [desc, setDesc] = useState('')

    const { mutate, data: billlanding } = useGetBillandingDetail();
    const { mutate: exit, data: exitData } = useExitBilllanding();

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

    const handleExit = () => {
        const formData = {
            billLandingId: billlanding?.id,
            toStatus: billlanding?.billlandingStatusId,
            description: desc
        }
        exit(formData)
        setIsOpen(false)
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
                {billlanding && (
                    <>
                        <div>
                            <button
                                onClick={() => setIsOpen(true)}
                                className="m-2 mt-6 rounded-md bg-green-600 p-2 text-white"
                            >
                                خروج حواله
                            </button>
                        </div>
                    </>
                )}
            </div>
            <div className="grid grid-cols-4 gap-x-2 gap-y-2">
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
                    className="col-span-2"
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
            <Modal isOpen={isOpen} onClose={handleClose} reqular>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="flex items-center justify-center">
                        <span className="text-center font-YekanBold">{`ایا از خروج بارنامه به شماره ${billlanding?.id} اطمینان دارید؟`}</span>
                    </div>
                    <div>
                        <Input value={desc} onChange={(e: any) => setDesc(e.target.value)} placeholder="توضیحات" reqular />
                    </div>
                    <div className="mt-8 flex flex-row items-end justify-end gap-2">
                        <button onClick={handleExit} className="rounded-lg bg-green-500 px-8 py-1 text-white">
                            بله
                        </button>
                        <button
                            onClick={handleClose}
                            className="rounded-lg bg-red-500 px-8 py-1 text-white"
                        >
                            خیر
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default ExitBilllannding;