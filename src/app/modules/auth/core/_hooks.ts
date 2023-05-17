import * as api from "./_requests"
import { useQuery } from 'react-query'

export const useGetCaptcha = () => {
    return useQuery("captcha", api.getCaptcha)
}
