import ActionButton from "../../../../_cloner/helpers/components/Modules/ActionButton";
import Modal from "../../../../_cloner/helpers/Modal";
import { useFormik } from "formik";
import { useCreateNews, useCreateStaticContent, useFetchNews, useFetchStaticContent } from "../core/_hooks";
import { FC, useState } from "react";
import Input from "../../../../_cloner/helpers/components/Modules/Input";
import SelectOption from "../../../../_cloner/helpers/components/Modules/SelectOption";
import { onImageChange } from "../../../../_cloner/helpers/imageChangeFunction";
import newsStatus from '../../../../_cloner/fakedata/newsStatus.json'
import newsType from '../../../../_cloner/fakedata/newsType.json'

interface IProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateStaticContent: FC<IProps> = ({ isOpen, setIsOpen }) => {
    const [imageUpload, setImageUpload] = useState<any>(null);
    const [imageFile, setImageFile] = useState<any>(null);

    const closeModal = () => setIsOpen(false);
    const initialValues = {
        id: 0,
        Title: "",
        Content: "",
        File: "",
        UserId: "",
        UniqueName: null,
    };

    const { refetch } = useFetchStaticContent();

    const { mutate } = useCreateStaticContent();

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        onSubmit: async (values, { setStatus, setSubmitting, resetForm }) => {
            try {
              var bodyFormData = new FormData();
              bodyFormData.append('File', imageFile);
              bodyFormData.append("Title", values.Title);
              bodyFormData.append("Content", values.Content);
              bodyFormData.append("UniqueName", values.Content);
                mutate(bodyFormData,
                    {
                        onSuccess: () => {
                            setIsOpen(false);
                            refetch();
                            resetForm()
                            setImageFile(null)
                            setImageUpload(null)
                        },
                    }
                );
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <form className="flex flex-col" onSubmit={formik.handleSubmit}>
                    <Input
                        getFieldProps={formik.getFieldProps}
                        touched={formik.touched.Title}
                        errors={formik.errors.Title}
                        value={formik.values.Title}
                        onChange={formik.handleChange}
                        name="Title"
                        type="text"
                        title="عنوان"
                    />
                    <Input
                        getFieldProps={formik.getFieldProps}
                        touched={formik.touched.UniqueName}
                        errors={formik.errors.UniqueName}
                        value={formik.values.UniqueName}
                        onChange={formik.handleChange}
                        name="UniqueName"
                        type="text"
                        title="آدرس"
                        />
                    <Input
                        getFieldProps={formik.getFieldProps}
                        touched={formik.touched.Content}
                        errors={formik.errors.Content}
                        value={formik.values.Content}
                        onChange={formik.handleChange}
                        name="Content"
                        type="text"
                        title="توضیحات"
                    />
                    <label
                        htmlFor="imageUpload"
                        className="btn btn-primary btn-block btn-outlined h-auto"
                    >
                        آپلود تصویر
                        <Input
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.File}
                            errors={formik.errors.File}
                            value={formik.values.File}
                            onChange={(e: any) => onImageChange(e, setImageUpload, setImageFile)}
                            file={true}
                            className="hidden"
                            id="imageUpload"
                            name="File"
                            type="file"
                        />
                    </label>
                    <div className="flex items-center justify-center">
                        <img
                            className={`mt-4 block h-[100px] w-[180px] rounded-lg`}
                            src={imageUpload}
                        />
                    </div>
                    <div className="flex justify-start items-start mr-auto">
                        <ActionButton title="ایجاد" />
                    </div>
                </form>
            </div>
        </Modal>
    );
};
export default CreateStaticContent;