import { FC } from "react";

interface IProps {
    title: string;
    defaultValue?: string;
    disable?: boolean;
}

const TextareaAndInput: FC<IProps> = ({ title, defaultValue, disable }) => {
    return (
        <section className="row-span-2 flex items-center justify-around p-2">
            <label className="inline-block w-[150px] text-left pl-2 font-IRANSans text-md">
                {title}:
            </label>
            <textarea
                disabled={disable}
                defaultValue={defaultValue}
                className="bg-transparent inline-block w-full rounded-md border border-gray-400 p-2 font-IRANSans text-lg outline-none"
            />
        </section>
    );
};

export default TextareaAndInput;
