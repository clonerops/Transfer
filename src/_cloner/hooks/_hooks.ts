import { useQuery } from 'react-query'
import * as api from "../requets/_requests"

const useParkings = () => {
    return useQuery("parkings", api.getParkings)
}

const useContractors = () => {
    return useQuery('contactors', api.getContractors)
}

const useShippingTypes = () => {
    return useQuery('shippingTypes', api.getShippingTypes)
}

const useDrivers = () => {
    return useQuery('drivers', api.getDrivers)
}

const useDealers = () => {
    return useQuery('dealers', api.getDelaers)
}

const usePlateList = () => {
    return useQuery('plateList', api.getPlateList)
}

const useProvince = () => {
    return useQuery('provinces', api.getProvince)
}

const useCity = (id: number) => {
    return useQuery(['cities', id], () => api.getCity(id))
}
 
export { 
    useParkings,
    useContractors,
    useShippingTypes,
    useDrivers,
    useDealers,
    usePlateList,
    useProvince,
    useCity
}