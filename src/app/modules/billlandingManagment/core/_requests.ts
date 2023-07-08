import { dashboardHttp } from "../../../../_cloner/helpers/apiConfig"

const getCarsByUserId = async () => {
    const { data } = await dashboardHttp.get('/SaleSystem/DeliverableCarsByUserId')
    return data
}

// Billanding Detail
const getBillandingDetail = async (id: number) => {
    const { data } = await dashboardHttp.get(`/BillLanding/${id}`)
    return data
}

export { getCarsByUserId, getBillandingDetail }