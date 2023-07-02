export const onImageChange = (e: any, setImageUpload: any, setImageFile: any) => {
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
