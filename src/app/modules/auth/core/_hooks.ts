import { AuthModelS } from "./_models"
import * as api from "./_requests"
import { useQuery, useMutation } from 'react-query'

export const useGetCaptcha = () => {
    return useQuery("captcha", api.getCaptcha)
}
