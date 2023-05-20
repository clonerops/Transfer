import { dashboardHttp } from "../../../../_cloner/helpers/apiConfig"

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

export {
    getCarDelayData,
    getInventoryRailData
}