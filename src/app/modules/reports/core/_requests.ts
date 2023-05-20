import { dashboardHttp } from "../../../../_cloner/helpers/apiConfig"
import { CarStatusRequest } from "./_models"

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
    console.log("formDataformData", formData)
    const { data } = await dashboardHttp.get('/BillLandingReport/BLandCarStatusRep', {
        headers: {
            ProdNo: formData.productNo,
            ChassisNo: formData.chassisNo
        }
    })
    return data;

}

export {
    getCarDelayData,
    getInventoryRailData,
    getCarStatusData
}