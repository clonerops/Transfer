import React, { FC, useState } from "react";
import Modal from "../../../../_cloner/helpers/Modal";
import { useFormik } from "formik";
import { useEditStaticContent, useFetchStaticContent } from "../core/_hooks";
import Input from "../../../../_cloner/helpers/components/Modules/Input";
import SelectOption from "../../../../_cloner/helpers/components/Modules/SelectOption";
import ActionButton from "../../../../_cloner/helpers/components/Modules/ActionButton";
import { onImageChange } from "../../../../_cloner/helpers/imageChangeFunction";
import newsStatus from '../../../../_cloner/fakedata/newsStatus.json'
import newsType from '../../../../_cloner/fakedata/newsType.json'

interface IProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    items: any;
}

const EditStaticContent: FC<IProps> = ({ isOpen, setIsOpen, items }) => {
    const closeModal = () => setIsOpen(false);
    const [imageUpload, setImageUpload] = useState<any>(null);
    const [imageFile, setImageFile] = useState<any>(null);

    const { mutate } = useEditStaticContent();
    const { refetch } = useFetchStaticContent();

    console.log(items)

    const formik = useFormik({
        initialValues: items,
        enableReinitialize: true,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            try {
                var bodyFormData = new FormData();
                bodyFormData.append("id", values.id);
                bodyFormData.append(
                    "File",
                    imageFile ? imageFile : values.File
                );
                bodyFormData.append("Title", values.Title);
                bodyFormData.append("Content", values.Content);
                bodyFormData.append("UniqueName", values.UniqueName);

                mutate(bodyFormData, {
                    onSuccess: () => {
                        refetch();
                        closeModal();
                        setImageFile(null);
                    },
                });
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
                        touched={formik.touched.id}
                        errors={formik.errors.id}
                        value={formik.values.id}
                        onChange={formik.handleChange}
                        name="id"
                        type="hidden"
                    />
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
                            src={imageUpload ? imageUpload : `data:image/jpeg;base64,${formik.values.File}`}
                        />
                    </div>
                    <div className="mr-auto flex items-start justify-start">
                        <ActionButton title="ویرایش" />
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default EditStaticContent;
