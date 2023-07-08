import { useFormik } from "formik";
import React from "react";
import Input from "../../../../_cloner/helpers/components/Modules/Input";

const Search = () => {


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
        <form
            className="flex items-center justify-center"
            onSubmit={formik.handleSubmit}
        >
            <Input
                getFieldProps={formik.getFieldProps}
                touched={formik.touched.search}
                errors={formik.errors.search}
                name={"search"}
                type="number"
                title="شماره حواله"
            />
            <button className="m-2 mt-6 rounded-md bg-indigo-600 p-2 text-white">
                جستجو
            </button>
        </form>
    );
};

export default Search;
