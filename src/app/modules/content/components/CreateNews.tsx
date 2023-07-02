import ActionButton from "../../../../_cloner/helpers/components/Modules/ActionButton";
import Modal from "../../../../_cloner/helpers/Modal";
import { useFormik } from "formik";
import { useCreateNews, useFetchNews } from "../core/_hooks";
import { FC, useState } from "react";
import Input from "../../../../_cloner/helpers/components/Modules/Input";
import SelectOption from "../../../../_cloner/helpers/components/Modules/SelectOption";

interface IProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const isStatus = [
    { id: 1, title: "انتشار" },
    { id: 2, title: "عدم انتشار" },
];
const isType = [
    { id: 1, title: "اخبار" },
    { id: 2, title: "اطلاعیه" },
];

const CreateNews: FC<IProps> = ({ isOpen, setIsOpen }) => {
    const [imageUpload, setImageUpload] = useState<any>(null);
    const [imageFile, setImageFile] = useState<any>(null);

    const closeModal = () => setIsOpen(false);
    const initialValues = {
        id: 0,
        Title: "",
        Content: "",
        STATUS: "",
        Type: "",
        UserId: "",
        Image: null,
    };

    const onImageChange = (e: any) => {
        if (
            e.target.files[0].type !== "image/png" &&
            e.target.files[0].type !== "image/jpg" &&
            e.target.files[0].type !== "image/jpeg"
        ) {
            alert("شما نمی توانید فایلی غیر از تصویر آپلود نمایید!");
        } else {
            setImageUpload(URL.createObjectURL(e.target.files[0]));
            setImageFile(e.target.files[0]);
        }
    };

    const { refetch } = useFetchNews();

    const { mutate } = useCreateNews();

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        onSubmit: async (values, { setStatus, setSubmitting, resetForm }) => {
            try {
              console.log(values.STATUS)
              var bodyFormData = new FormData();
              bodyFormData.append('Image', imageFile);
              bodyFormData.append("Title", values.Title);
              bodyFormData.append("Content", values.Content);
              bodyFormData.append("STATUS", values.STATUS);
              bodyFormData.append("Type", values.Type);
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
                        touched={formik.touched.Content}
                        errors={formik.errors.Content}
                        value={formik.values.Content}
                        onChange={formik.handleChange}
                        name="Content"
                        type="text"
                        title="محتوا"
                    />
                    <SelectOption
                        getFieldProps={formik.getFieldProps}
                        touched={formik.touched.STATUS}
                        errors={formik.errors.STATUS}
                        name={"STATUS"}
                        id={"STATUS"}
                        title="وضعیت انتشار"
                    >
                        <option value="">انتخاب کنید...</option>
                        {isStatus?.map((item: any) => {
                            return (
                                <option value={item.id}>{item.title}</option>
                            );
                        })}
                    </SelectOption>
                    <SelectOption
                        getFieldProps={formik.getFieldProps}
                        touched={formik.touched.Type}
                        errors={formik.errors.Type}
                        name={"Type"}
                        id={"Type"}
                        title="نوع خبر"
                    >
                        <option value="">انتخاب کنید...</option>
                        {isType?.map((item: any) => {
                            return (
                                <option value={item.id}>{item.title}</option>
                            );
                        })}
                    </SelectOption>
                    <label
                        htmlFor="imageUpload"
                        className="btn btn-primary btn-block btn-outlined h-auto"
                    >
                        آپلود تصویر
                        <Input
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.Image}
                            errors={formik.errors.Image}
                            value={formik.values.Image}
                            onChange={onImageChange}
                            file={true}
                            className="hidden"
                            id="imageUpload"
                            name="Image"
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

export default CreateNews;
