import { FC, useState } from "react";
import DealerCollapse from "./DealerCollapse";
import ProvinceCollapse from "./ProvinceCollapse";
import CityCollapse from "./CityCollapse";

interface IProps {
    data: any;
    selectedCars: any;
    setModalSelectedCars: any;
    handleGroupClose: any;
}

const Tabs: FC<IProps> = ({
    data,
    selectedCars,
    setModalSelectedCars,
    handleGroupClose,
}) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <div className="w-1/3">
                    <ul className="flex gap-4">
                        <li
                            className={`cursor-pointer rounded-t-md px-4 py-2 ${
                                activeTab === 0
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                            onClick={() => handleTabClick(0)}
                        >
                            نمایندگی
                        </li>
                        <li
                            className={`cursor-pointer rounded-t-md px-4 py-2 ${
                                activeTab === 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                            onClick={() => handleTabClick(1)}
                        >
                            استان
                        </li>
                        <li
                            className={`cursor-pointer rounded-t-md px-4 py-2 ${
                                activeTab === 2
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                            onClick={() => handleTabClick(2)}
                        >
                            شهر
                        </li>
                    </ul>
                </div>
                <div>
                    <button
                        onClick={handleGroupClose}
                        className="rounded-lg bg-indigo-600 px-8 py-4"
                    >
                        <span className="font-YekanBold text-white">تایید</span>
                    </button>
                </div>
            </div>
            <div className="w-full">
                {activeTab === 0 &&
                    data?.byDealer?.map((item: any) => (
                        <DealerCollapse
                            title={item.factorName}
                            cars={item.cars}
                            selectedCars={selectedCars}
                            setModalSelectedCars={setModalSelectedCars}
                        />
                    ))}
                {activeTab === 1 &&
                    data?.byProvince?.map((item: any) => (
                        <ProvinceCollapse
                            title={item.factorName}
                            cars={item.cars}
                            selectedCars={selectedCars}
                            setModalSelectedCars={setModalSelectedCars}
                        />
                    ))}
                {activeTab === 2 &&
                    data?.byCity?.map((item: any) => (
                        <CityCollapse
                            title={item.factorName}
                            cars={item.cars}
                            selectedCars={selectedCars}
                            setModalSelectedCars={setModalSelectedCars}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Tabs;
