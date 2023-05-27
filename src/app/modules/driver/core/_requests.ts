import { dashboardHttp } from "../../../../_cloner/helpers/apiConfig"
import { DriverList } from "./_models"

const getDriverData = async (formData: DriverList) => {
    const { data } = await dashboardHttp.get(`/Driver?nationalId=${formData.nationalId}`)
    return data
}
const createDriver = async (formData: DriverList) => {
    const { data } = await dashboardHttp.post('/driver', formData)
    return data
}

export { getDriverData, createDriver }