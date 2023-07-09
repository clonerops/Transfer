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
import { useGetCarsByUserId } from "./core/_hooks";
import { CarModel, Driver } from "./core/_models";
import Modal from "../../../_cloner/helpers/Modal";
import { doubleBilllandingCarSelectGrid } from "../../../_cloner/helpers/grid-value/double-billlanding-cars-select";


const DoubleBilllanding = () => {
    const [driverValue, setDriverValue] = useState<Driver>();
    const [plateValue, setPlateValue] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const [selectedCars, setSelectedCars] = useState<any>([]);

    console.log(driverValue);
    console.log(plateValue);

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

    const handleSelectChange = (selectedOption: any, { name }: any) => {
        formik.setFieldValue(name, selectedOption);
    };

    const driverChange = (selected: any) => {
        setDriverValue(selected);
        const findPlate = plates?.find(
            (item: any) => item.id == selected?.plateId
        );
        setPlateValue({ value: findPlate.id, label: findPlate.platE_NO });
    };
    const plateChange = (selected: any) => setPlateValue(selected);

    const [inputs, setInputs] = useState({ productNo: "" });
    const onChangeHandler = useCallback(
        ({ target: { name, value } }: any) =>
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setInputs((state) => ({ ...state, [name]: value })),
        []
    );

    const handleSelectCars = (e: any) => {
        e.preventDefault();

        const findProduct = cars?.result.find(
            (item: CarModel) => item.proD_NO == Number(inputs.productNo)
        );
        setSelectedCars((prev: any) => [...prev, findProduct]);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Card5 title="ثبت حواله" image="/media/svg/brand-logos/aven.svg">
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
                            name="driverOption"
                            title="رانندگان"
                            placeholder=""
                        />
                        <ProfessionalSelect
                            custom={true}
                            options={dropdownPlates(plates)}
                            onChange={plateChange}
                            value={plateValue}
                            name="plateOption"
                            title="شماره انتظامی"
                            placeholder=""
                        />
                    </div>
                    <div className="mt-4 mb-4 grid grid-cols-4 gap-4">
                        <ProfessionalSelect
                            getFieldProps={formik.getFieldProps}
                            options={dropdownParkings(origins?.result)}
                            onChange={handleSelectChange}
                            title="مبدا حمل"
                            placeholder=""
                        />
                        <ProfessionalSelect
                            getFieldProps={formik.getFieldProps}
                            options={dropdownParkings(origins?.result)}
                            onChange={handleSelectChange}
                            title="مقصد حواله"
                            placeholder=""
                        />
                        <div className="col-span-2">
                            <Input
                                reqular={true}
                                className="h-[2.2rem]"
                                placeholder="25486 / 548236"
                                title="شماره حواله بارنامه جاده ای"
                            />
                        </div>
                    </div>
                </form>
                <div className="grid grid-cols-2 gap-4">
                    <form onSubmit={handleSelectCars} className="relative">
                        <div>
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
                        <div className="absolute top-[.4rem] -left-[1.1rem] m-5">
                            <button className="rounded-md bg-indigo-500 py-[.2rem] px-4 text-white">
                                +
                            </button>
                        </div>
                    </form>
                    <Input
                        className="h-[2.2rem]"
                        reqular={true}
                        placeholder=""
                        title="توضیحات"
                    />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="rounded-lg border border-dashed border-gray-600 px-4 py-2"
                    >
                        لیست خودروهای قابل حمل
                    </button>
                    <button className="rounded-lg border border-dashed border-gray-600 px-4 py-2">
                        دسته بندی خودروهای قابل حمل
                    </button>
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
            </Card5>
            <Modal isOpen={isOpen} onClose={handleClose} className="w-[78rem]">
                <Card5 title="لیست خودروها" image="/media/svg/brand-logos/aven.svg">
                    <MainGrid
                        rowSelection={"multiple"}
                        rowMultiSelectWithClick={true}
                        data={cars?.result}
                        columnDefs={doubleBilllandingCarSelectGrid()}
                    />
                </Card5>
            </Modal>
        </>
    );
};

export default DoubleBilllanding;
