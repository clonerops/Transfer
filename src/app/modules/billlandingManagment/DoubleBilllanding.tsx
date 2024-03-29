import { useFormik } from "formik";
import MainGrid from "../../../_cloner/helpers/components/MainGrid";
import Input from "../../../_cloner/helpers/components/Modules/Input";
import ProfessionalSelect from "../../../_cloner/helpers/components/Modules/ProfeesionalSelect";
import {
    dropdownContractor,
    dropdownDrivers,
    dropdownParkings,
    dropdownPlates,
    dropdownShippingTypes,
} from "../../../_cloner/helpers/dropdownValue1";
import { doubleBilllandingCarsGrid } from "../../../_cloner/helpers/grid-value/double-billlanding-cars";
import {
    useContractors,
    useDrivers,
    useParkings,
    usePlateList,
    useShippingTypes,
} from "../../../_cloner/hooks/_hooks";
import { Card5 } from "../../../_cloner/partials/content/cards/Card5";
import { useCallback, useState } from "react";
import { useGetCarsByUserId, useGetGroupCarsByUserId } from "./core/_hooks";
import { CarModel, Driver } from "./core/_models";
import Modal from "../../../_cloner/helpers/Modal";
import { doubleBilllandingCarSelectGrid } from "../../../_cloner/helpers/grid-value/double-billlanding-cars-select";
import Tab from "./components/Tab";
import Button from "./components/Button";
import MainModalGrid from "./components/MainModalGrid";

const DoubleBilllanding = () => {
    const [driverValue, setDriverValue] = useState<Driver>();
    const [plateValue, setPlateValue] = useState<any>(null);
    const [originValue, setOriginValue] = useState<any>(null);
    const [destinationValue, setDestinationValue] = useState<any>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isGroupOpen, setIsGroupOpen] = useState(false);
    const [isCargo, setIsCargo] = useState<any>(false);

    const [selectedCars, setSelectedCars] = useState<any>([]);
    const [modalSelectedCars, setModalSelectedCars] = useState<any>([]);

    const initialValues = {
        contractorOption: "",
        shippingOption: "",
        driverOption: "",
        plateOption: "",
    };

    const { data: contractors } = useContractors();
    const { data: shippingTypes } = useShippingTypes();
    const { data: drivers } = useDrivers();
    const { data: plates } = usePlateList();
    const { data: origins } = useParkings();
    const { data: cars } = useGetCarsByUserId();
    const { data: gruopcars } = useGetGroupCarsByUserId();

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (values, { setStatus, setSubmitting, resetForm }) => {
            try {
                console.log(values);
            } catch (error) {
                console.log(error);
            }
        },
    });

    const handleSelectChange = (selectedOption: any, { name }: any) =>
        formik.setFieldValue(name, selectedOption);

    const driverChange = (selectedOption: any) => {
        setDriverValue(selectedOption);
        const findPlate = plates?.find(
            (item: any) => item.id == selectedOption?.plateId
        );
        setPlateValue({ value: findPlate.id, label: findPlate.platE_NO });
    };
    const plateChange = (selectedOption: any) => setPlateValue(selectedOption);
    const originChange = (selectedOption: any) =>
        setOriginValue(selectedOption);
    const destinationChange = (selectedOption: any) =>
        setDestinationValue(selectedOption);

    const [inputs, setInputs] = useState({ productNo: "" });
    const onChangeHandler = useCallback(
        ({ target: { name, value } }: any) =>
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setInputs((state) => ({ ...state, [name]: value })),
        []
    );

    const handleSelectCars = (e: any) => {
        e.preventDefault();
        // Find Product and Duplicate Product
        const findProduct = cars?.result.find(
            (item: CarModel) => item.proD_NO == Number(inputs.productNo)
        );
        const duplicateProduct = selectedCars?.map(
            (item: CarModel) => item.proD_NO
        );
        // Check Conditions
        if (originValue === null) {
            alert("لطفا مبدا خود را وارد نمائید!");
        } else if (inputs.productNo === "" || inputs.productNo === null) {
            alert("شماره ساخت موردظر خود را وارد نمایید!");
        } else if (!findProduct) {
            alert("شماره ساخت وارد شده موجود نمی باشد!");
        } else if (duplicateProduct.includes(Number(inputs.productNo))) {
            alert("شماره ساخت موردنظر قبلا ثبت شده است!");
        } else if (findProduct.loC_CODE !== originValue?.value) {
            alert("پارکینگ ها مغایرت دارند!");
        } else {
            setSelectedCars((prev: any) => [...prev, findProduct]);
            setInputs({ productNo: "" });
        }
    };

    const handleConfirmFromList = () => {
        const duplicateProduct = selectedCars?.map(
            (item: CarModel) => item.proD_NO
        );
        let alertTriggered = false;

        modalSelectedCars.forEach((element: any) => {
            if (element.loC_CODE !== originValue?.value && !alertTriggered) {
                alert(
                    `شماره ساخت ${element.proD_NO} با پارکینگ انتخاب شده مغایرت دارد!`
                );
                alertTriggered = true;
            } else if (
                duplicateProduct.includes(element.proD_NO) &&
                !alertTriggered
            ) {
                alert(`شماره ساخت ${element.proD_NO} قبلا ثبت شده است!`);
                alertTriggered = true;
            } else {
                element.selected = true;
                const chooseCars = [
                    ...new Set([...selectedCars, ...modalSelectedCars]),
                ];
                const uniqueCars = chooseCars.filter((item, index) => {
                    return (
                        index ===
                        chooseCars.findIndex((itemIndex) => {
                            return itemIndex.proD_NO === item.proD_NO;
                        })
                    );
                });
                setSelectedCars(uniqueCars);
                setIsOpen(false);
                setIsGroupOpen(false);
            }
        });
    };

    const handleConfirm = () => {
        switch (selectedCars.length) {
            case 0:
                alert("خودرویی برای ثبت حواله مشخص نگردیده است");
                break;

            default:
                if (selectedCars.length > 11) {
                    alert("ظرفیت انتخاب خودرو بیش از حد مجاز می باشد!");
                }
                break;
        }
    };

    return (
        <>
            <Card5 title="ثبت حواله" image="/media/svg/brand-logos/aven.svg">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-YekanBold text-2xl">
                            شماره حواله:{" "}
                            <span className="px-4 text-green-700">10245</span>
                        </h3>
                    </div>
                    <div className="flex gap-4">
                        <span>
                            <input
                                type="checkbox"
                                value={isCargo}
                                onChange={(e) => setIsCargo(e.target.checked)}
                            />
                        </span>
                        <span className="font-YekanBold text-lg">
                            حواله از نوع{" "}
                            <span className="text-red-700">اعلام بار</span> می
                            باشد.
                        </span>
                    </div>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mt-4 mb-4 grid grid-cols-4 gap-4">
                        <ProfessionalSelect
                            getFieldProps={formik.getFieldProps}
                            name="contractorOption"
                            options={dropdownContractor(contractors?.result)}
                            onChange={handleSelectChange}
                            title="پیمانکار حمل"
                            placeholder=""
                        />
                        <ProfessionalSelect
                            getFieldProps={formik.getFieldProps}
                            options={dropdownShippingTypes(shippingTypes)}
                            name="shippingOption"
                            onChange={handleSelectChange}
                            title="نوع حمل"
                            placeholder=""
                        />
                        <ProfessionalSelect
                            custom={true}
                            options={dropdownDrivers(drivers)}
                            onChange={driverChange}
                            disabled={isCargo}
                            name="driverOption"
                            title="رانندگان"
                            placeholder=""
                        />
                        <ProfessionalSelect
                            custom={true}
                            options={dropdownPlates(plates)}
                            onChange={plateChange}
                            value={plateValue}
                            disabled={isCargo}
                            name="plateOption"
                            title="شماره انتظامی"
                            placeholder=""
                        />
                    </div>
                    <div className="mt-4 mb-4 grid grid-cols-4 gap-4">
                        <ProfessionalSelect
                            custom={true}
                            options={dropdownParkings(origins?.result)}
                            onChange={originChange}
                            value={originValue}
                            title="مبدا حمل"
                            placeholder=""
                        />
                        <ProfessionalSelect
                            custom={true}
                            options={dropdownParkings(origins?.result)}
                            onChange={destinationChange}
                            value={destinationValue}
                            title="مقصد حواله"
                            placeholder=""
                        />
                        <div className="">
                            <Input
                                reqular={true}
                                className="h-[29px]"
                                placeholder=""
                                title="شماره حواله"
                            />
                        </div>
                        <div className="">
                            <Input
                                reqular={true}
                                className="h-[29px]"
                                placeholder=""
                                title="بارنامه جاده ای"
                            />
                        </div>
                        <div className="col-span-4">
                            <Input
                                className="h-[2.2rem]"
                                reqular={true}
                                placeholder=""
                                title="توضیحات"
                            />
                        </div>
                    </div>
                </form>
                <form
                    onSubmit={handleSelectCars}
                    className="relative flex items-center"
                >
                    <div className="flex-1">
                        <Input
                            reqular={true}
                            value={inputs.productNo}
                            onChange={onChangeHandler}
                            className="h-[2.2rem]"
                            name="productNo"
                            placeholder=""
                            title="شماره ساخت"
                        />
                    </div>
                    <button className="mt-6 mr-3 rounded-md bg-indigo-500 px-8 py-2 text-white">
                        +
                    </button>
                </form>
                <div className="flex items-center justify-between">
                    <div className="">
                        <span className="font-YekanBold text-2xl">
                            تعداد خودروهای انتخاب شده:{" "}
                            <span className="text-indigo-600">
                                {selectedCars.length}
                            </span>
                        </span>
                    </div>

                    <div className="mt-4 flex items-start justify-start gap-4">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="rounded-lg border border-dashed border-gray-600 bg-indigo-600 px-4 py-4 text-white transition hover:bg-indigo-800"
                        >
                            لیست خودروهای قابل حمل
                        </button>
                        <button
                            onClick={() => setIsGroupOpen(true)}
                            className="rounded-lg border border-dashed border-gray-600 bg-indigo-600 px-4 py-4 text-white transition hover:bg-indigo-800"
                        >
                            دسته بندی خودروهای قابل حمل
                        </button>
                    </div>
                </div>
                <div className="mt-8">
                    <MainGrid
                        data={selectedCars}
                        columnDefs={doubleBilllandingCarsGrid(
                            selectedCars,
                            setSelectedCars
                        )}
                    />
                </div>
                <div className="mt-4 mb-2 w-full">
                    <Button text="ثبت حواله" onClick={handleConfirm} />
                </div>
            </Card5>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                className="w-[78rem]"
            >
                <Card5
                    title="لیست خودروها"
                    image="/media/svg/brand-logos/aven.svg"
                    modalCard={true}
                >
                    <div>
                        <Button text="تایید" onClick={handleConfirmFromList} />
                    </div>
                    <MainModalGrid
                        rowSelection={"multiple"}
                        rowMultiSelectWithClick={true}
                        data={cars?.result}
                        columnDefs={doubleBilllandingCarSelectGrid()}
                        selectedCars={selectedCars}
                        setModalSelectedCars={setModalSelectedCars}
                    />
                </Card5>
            </Modal>
            <Modal
                isOpen={isGroupOpen}
                onClose={() => setIsGroupOpen(false)}
                className="w-[78rem]"
            >
                <Card5
                    title="لیست خودروها"
                    image="/media/svg/brand-logos/aven.svg"
                    modalCard={true}
                >
                    <Tab
                        data={gruopcars}
                        selectedCars={selectedCars}
                        setModalSelectedCars={setModalSelectedCars}
                        handleGroupClose={handleConfirmFromList}
                    />
                </Card5>
            </Modal>
        </>
    );
};

export default DoubleBilllanding;
