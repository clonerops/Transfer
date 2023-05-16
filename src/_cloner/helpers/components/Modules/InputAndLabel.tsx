import { FC } from "react";

interface IProps {
    title: string
    defaultValue?: string
    disable?: boolean
    required?: boolean
    name?: string | undefined 
    valueData?: string | number
    onChangeData?: React.ChangeEventHandler<HTMLInputElement> | undefined

}

const InputAndLabel: FC<IProps> = ({ title, defaultValue, disable, required, name, valueData,  onChangeData}) => {
    return (
        <section className="flex items-center p-1 py-2">
            <label className="inline-block w-[150px] pl-1 text-left font-IRANSans text-md">
               {title}: {required && <span className="text-red-600">*</span>}
            </label>
            <input
                type="text"
                value={valueData}
                name={name}
                onChange={onChangeData}
                disabled={disable}
                defaultValue={defaultValue}
                className="bg-transparent m-0 inline-block w-[14rem] rounded-md border border-gray-400 p-1 font-IRANSans text-lg outline-none"
            />
        </section>
    );
};

export default InputAndLabel;
