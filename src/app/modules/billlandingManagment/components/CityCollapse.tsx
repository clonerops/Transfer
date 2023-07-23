import { FC, useState } from "react";
import MainGrid from "../../../../_cloner/helpers/components/MainGrid";
import { doubleBilllandingCarSelectGrid } from "../../../../_cloner/helpers/grid-value/double-billlanding-cars-select";

interface IProps {
    title?: string;
    cars?: any;
    selectedCars: any;
    setSelectedCars: any;
}

const CityCollapse: FC<IProps> = ({
    title,
    cars,
    selectedCars,
    setSelectedCars,
}) => {
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
                <h3 className="font-VazirBold text-lg text-white">{title}</h3>
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
                    <MainGrid
                        rowSelection={"multiple"}
                        rowMultiSelectWithClick={true}
                        data={cars}
                        columnDefs={doubleBilllandingCarSelectGrid()}
                        selectedCars={selectedCars}
                        setSelectedCars={setSelectedCars}
                    />
                </div>
            )}
        </div>
    );
};

export default CityCollapse;
