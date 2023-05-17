import { useQuery } from "react-query"
import * as api from "./_requests"

const useCarDelay = (prodNo: number) => {
    return useQuery(["carDelay", prodNo], () => api.getCarDelayData(prodNo))
}

export {
    useCarDelay
}