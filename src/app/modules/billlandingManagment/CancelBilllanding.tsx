import React from "react";
import VisionBilllannding from "./VisionBilllannding";
import Input from "../../../_cloner/helpers/components/Modules/Input";
import { useFormik } from "formik";

const CancelBilllanding = () => {
    const initialValues = {
        search: ''
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            try {
                setSubmitting(false);
            } catch (error) {
                setStatus("اطلاعات ورود نادرست می باشد");
                setSubmitting(false);
            }
        },
    });

    return (
        <>
            <VisionBilllannding />
        </>
    );
};

export default CancelBilllanding;
