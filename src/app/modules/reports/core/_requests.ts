import { dashboardHttp } from "../../../../_cloner/helpers/apiConfig"
import { BillandingChart, CarChart, CarStatusRequest, LandigStatus, TemporaryStatus } from "./_models"

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

const getLandingStatus = async (formData: LandigStatus) => {    
    const { data } = await dashboardHttp.get('/BillLandingReport/GetIssuedBLandsRep', {
        headers: {
            BLandId: formData.BLandId,
            BlandSerialNo: formData.BlandSerialNo,
            fromDate: formData.fromDate === undefined ? "" : formData.fromDate,
            toDate: formData.toDate === undefined ? "" : formData.toDate,
            contId: formData.contId,
            transType: formData.transType,
            driverId: formData.driverId,
            originId: formData.originId,
            destId: formData.destId,
            StatusId: formData.StatusId,
        }
    })
    return data
 
}
const getTemporaryStatus = async (formData: TemporaryStatus) => {    
    const { data } = await dashboardHttp.get('/BillLandingReport/GetBLandIssuedCars', {
        headers: {
            fromDate: formData.fromDate === undefined ? "" : formData.fromDate,
            toDate: formData.toDate === undefined ? "" : formData.toDate,
            contId: formData.contId,
            driverId: formData.driverId,
            recDealerId: formData.recDealerId,
            originId: formData.originId,
            destId: formData.destId,
            Status: formData.StatusId,
        }
    })
    return data
 
}

export {
    getCarDelayData,
    getInventoryRailData,
    getCarStatusData,
    getBillandigChartRequest,
    getCarChartRequest,
    getLandingStatus,
    getTemporaryStatus
}