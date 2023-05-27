import { UseMutationResult, useMutation, useQuery } from 'react-query'
import * as api from './_requests'

const useDriverDataRequest = (): UseMutationResult<any, unknown, any, unknown> => {
    return useMutation((formData: any) => {
        return api.getDriverData(formData)
      })
    }
const useCreateDriverRequest = (): UseMutationResult<any, unknown, any, unknown> => {
    return useMutation((formData: any) => {
        return api.createDriver(formData)
      })
    }

export { useDriverDataRequest, useCreateDriverRequest }