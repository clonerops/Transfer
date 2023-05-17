import {dashboardHttp} from "../helpers/apiConfig"


const getParkings = async () => {
    const { data } = await dashboardHttp.get("/SaleSystem/GetParkings")
    return data
}

const getContractors = async () => {
    const { data } = await dashboardHttp.get('/SaleSystem/GetContractor')
    return data
}

const getShippingTypes = async () => {
    const { data } = await dashboardHttp.get("/SaleSystem/ShippingTypes")
    return data
}

const getDrivers = async () => {
    const { data } = await dashboardHttp.get("/SaleSystem/GetDrivers")
    return data
}

const getDelaers = async () => {
    const { data } = await dashboardHttp.get("/SaleSystem/GetDelaers")
    return data
}

const getPlateList = async () => {
    const { data } = await dashboardHttp.get("/SaleSystem/GetPlateList")
    return data
}

const getProvince = async () => {
    const { data } = await dashboardHttp.get('/SaleSystem/GetAllProvinces')
    return data
}

const getCity = async (id: number) => {
    const { data } = await dashboardHttp.get(`/SaleSystem/GetProviceCities/${id}`)
    return data
}


export {
    getParkings,
    getContractors,
    getShippingTypes,
    getDrivers,
    getDelaers,
    getPlateList,
    getProvince,
    getCity
}