import { dashboardHttp } from "../../../../_cloner/helpers/apiConfig"

const getCarDelayData = async (prodNo: any) => {
    const { data } = await dashboardHttp.get("/BillLandingReport/Get", {
        headers: {
            ProdNo: prodNo
        }
    })
    return data
}

export {
    getCarDelayData
}