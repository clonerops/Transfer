import { FC, useState } from "react";
import { doubleBilllandingCarSelectGrid } from "../../../../_cloner/helpers/grid-value/double-billlanding-cars-select";
import MainModalGrid from "./MainModalGrid";

interface IProps {
    title?: string
    cars?: any
    selectedCars: any;
    setModalSelectedCars: any;

}

const DealerCollapse: FC<IProps> = ({ title, cars, selectedCars, setModalSelectedCars }) => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };




    return (
        <div className="mt-2 mb-2">
            <div
                className="flex cursor-pointer items-center justify-between rounded-tl-md bg-blue-500 p-4 text-white"
                onClick={toggleCollapsible}
            >
                <h3 className="font-YekanBold text-lg text-white">{title}</h3>
                <span
                    className={`transform transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </span>
            </div>
            {isOpen && (
                <div className="bg-gray-200 p-4">
                    <MainModalGrid
                        rowSelection={"multiple"}
                        rowMultiSelectWithClick={true}
                        data={cars}
                        columnDefs={doubleBilllandingCarSelectGrid()}
                        selectedCars={selectedCars}
                        setModalSelectedCars={setModalSelectedCars}
                    />
                </div>
            )}
        </div>
    );
};

export default DealerCollapse;
