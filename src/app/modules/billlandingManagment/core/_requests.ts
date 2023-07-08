import { dashboardHttp } from "../../../../_cloner/helpers/apiConfig"
import { ExitModel } from "./_models"

const getCarsByUserId = async () => {
    const { data } = await dashboardHttp.get('/SaleSystem/DeliverableCarsByUserId')
    return data
}

// Billanding Detail
const getBillandingDetail = async (id: number) => {
    const { data } = await dashboardHttp.get(`/BillLanding/${id}`)
    return data
}
// Billlanding Cancel
const cancelBilllanding = async (id: number) => {
    const { data } = await dashboardHttp.post(`/BillLanding/CancellationBillLanding/${id}`)
    return data
}
// Billlanding Exit
const exitBilllanding = async (formData: ExitModel) => {
    const { data } = await dashboardHttp.post(`/BillLanding/UpdateBillLandingStatus`, JSON.stringify(formData))
    return data
}

export { getCarsByUserId, getBillandingDetail, cancelBilllanding, exitBilllanding }