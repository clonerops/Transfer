import { FC } from "react";

interface IProps {
    title: string
    className?: string
    description: any
}

const InformationBillanding:FC<IProps> = ({title, description,  className}) => {
    return (
        <div className={`card card-body shadow-lg ${className}`}>
            <div className="flex flex-col items-center justify-center">
                <span className="font-VazirBold text-gray-500">{title}</span>
                <span className="font-VazirBold text-lg">{description}</span>
            </div>
        </div>
    );
};

export default InformationBillanding;
