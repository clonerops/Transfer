import { FC } from "react";

interface IProps {
    title: string;
    defaultValue?: string;
    disable?: boolean;
}

const CheckboxAndLabel: FC<IProps> = ({ title, defaultValue, disable }) => {
    return (
        <section className="flex justify-start items-center w-full p-2">
            <label className="inline-block text-left font-IRANSans px-8 text-md text-indigo-500">
                {title}
            </label>
            <input
                type="checkbox"
                disabled={disable}
                defaultValue={defaultValue}
                className="inline-block border border-gray-400 px-8"
            />
        </section>
    );
};
 
export default CheckboxAndLabel;
