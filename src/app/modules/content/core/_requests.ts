import {dashboardHttp} from '../../../../_cloner/helpers/apiConfig'
import {Faq, FaqWithoutId, News, NewsWithoutId, StaticLink, StaticLinkWithoutId} from './_models'

// Static Links
const getStaticLinks = async () => {
  const {data} = await dashboardHttp.get('/StaticLink')
  return data
}

const createStaticLink = async (formData: StaticLinkWithoutId) => {
  const {data} = await dashboardHttp.post('/StaticLink', formData)
  return data
}

const editStaticLicks = async (id: number, formData: StaticLink) => {
  const {data} = await dashboardHttp.put(`/StaticLink/${id}`, formData)
  return data
}

const deleteStaticLinks = async (id: number) => {
  const {data} = await dashboardHttp.delete(`/StaticLink/${id}`)
  return data
}

// Faq
const getFaq = async () => {
  const {data} = await dashboardHttp.get('/faq')
  return data
}

const createFaq = async (formData: FaqWithoutId) => {
  const {data} = await dashboardHttp.post('/faq', formData)
  return data
}

const deleteFaq = async (id: number) => {
  const {data} = await dashboardHttp.delete(`/faq/${id}`)
  return data
}

const editFaq = async (id: number, formData: Faq) => {
  const {data} = await dashboardHttp.put(`/faq/${id}`, formData)
  return data
}

// News
const getNews = async () => {
  const {data} = await dashboardHttp.get('/News')
  return data
}

const createNews = async (formData: any) => {
  const {data} = await dashboardHttp.post('/News', formData)
  return data
}

const deleteNews = async (id: number) => {
  const {data} = await dashboardHttp.delete(`/News/${id}`)
  return data
}

const editNews = async (formData: any) => {
  let formObject = Object.fromEntries(formData.entries());
  const {data} = await dashboardHttp.put(`/News/${formObject.id}`, formData)
  return data
}

// StaticContent
const getStaticContent = async () => {
  const {data} = await dashboardHttp.get('/StaticContent')
  return data
}

const createStaticContent = async (formData: any) => {
  const {data} = await dashboardHttp.post('/StaticContent', formData)
  return data
}

const deleteStaticContent = async (id: number) => {
  const {data} = await dashboardHttp.delete(`/StaticContent/${id}`)
  return data
}

const editStaticContent = async (formData: any) => {
  let formObject = Object.fromEntries(formData.entries());
  const {data} = await dashboardHttp.put(`/StaticContent/${formObject.id}`, formData)
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
  editFaq,
  getNews,
  createNews,
  deleteNews,
  editNews,
  getStaticContent,
  createStaticContent,
  deleteStaticContent,
  editStaticContent,
}
