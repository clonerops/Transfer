import { dashboardHttp } from "../../../../_cloner/helpers/apiConfig"
import { BillandingChart, CarChart, CarStatusRequest } from "./_models"

const getCarDelayData = async (prodNo: any) => {
    const { data } = await dashboardHttp.get("/BillLandingReport/Get", {
        headers: {
            ProdNo: prodNo
        }
    })
    return data
}

const getInventoryRailData = async (parkingId: number) => {
    const { data } = await dashboardHttp.get(`/BillLandingReport/GetRailParkingsStock?parkingId=${parkingId}`)
    return data
}

const getCarStatusData = async (formData: CarStatusRequest) => {
    const { data } = await dashboardHttp.get('/BillLandingReport/BLandCarStatusRep', {
        headers: {
            ProdNo: formData.productNo,
            ChassisNo: formData.chassisNo
        }
    })
    return data;

}

const getBillandigChartRequest = async (formData: BillandingChart) => {
    const { data } = await dashboardHttp.get('/BillLandingReport/GetIssuedBLandsStatRep', {
        headers: {
            fromDate: formData.fromDate === "Invalid date" ? "" : formData.fromDate,
            toDate: formData.toDate === "Invalid date" ? "" : formData.toDate,
            contr_id: formData.contr_id
        }
    })
    return data
}
const getCarChartRequest = async (formData: CarChart) => {
    const { data } = await dashboardHttp.get('/BillLandingReport/GetIssuedBLandCarsStatRep', {
        headers: {
            fromDate: formData.fromDate === "Invalid date" ? "" : formData.fromDate,
            toDate: formData.toDate === "Invalid date" ? "" : formData.toDate,
            contr_id: formData.contr_id
        }
    })
    return data
}

export {
    getCarDelayData,
    getInventoryRailData,
    getCarStatusData,
    getBillandigChartRequest,
    getCarChartRequest
}