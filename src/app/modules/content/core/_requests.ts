import { dashboardHttp } from "../../../../_cloner/helpers/apiConfig"
import { StaticLink, StaticLinkWithoutId } from "./_models"

const getStaticLinks = async () => {
    const { data } = await dashboardHttp.get('/StaticLink')
    return data
}

const createStaticLink = async (formData:StaticLinkWithoutId) => {
    const { data } = await dashboardHttp.post('/StaticLink', formData)
    return data
}

const editStaticLicks = async (id: number , formData: StaticLink) => {
    const { data } = await dashboardHttp.put(`/StaticLink/${id}`, formData)
    return data
}

const deleteStaticLinks = async (id: number) => {
    const { data } = await dashboardHttp.delete(`/StaticLink/${id}`)
    return data
}

export { getStaticLinks, createStaticLink, editStaticLicks, deleteStaticLinks }