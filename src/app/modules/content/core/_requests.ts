import { dashboardHttp } from "../../../../_cloner/helpers/apiConfig"
import { Faq, FaqWithoutId, StaticLink, StaticLinkWithoutId } from "./_models"

// Static Links
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

// Faq
const getFaq = async() => {
    const { data } = await dashboardHttp.get('/faq')
    return data
}

const createFaq = async (formData: FaqWithoutId) => {
    const { data } = await dashboardHttp.post('/faq', formData)
    return data
}

const deleteFaq = async (id: number) => {
    const { data } = await dashboardHttp.delete(`/faq/${id}`)
    return data
}

const editFaq = async (id: number, formData: Faq) => {
    const { data } = await dashboardHttp.put(`/faq/${id}`, formData)
    return data
}

export { 
    getStaticLinks, 
    createStaticLink, 
    editStaticLicks, 
    deleteStaticLinks,
    getFaq,
    createFaq,
    deleteFaq,
    editFaq }