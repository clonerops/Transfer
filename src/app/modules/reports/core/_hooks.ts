import {useMutation, UseMutationResult} from 'react-query'
import * as api from './_requests'


const useDelayRequest = (): UseMutationResult<any, unknown, any, unknown> => {
    return useMutation((formData:any) => {
        return api.getCarDelayData(formData)
    })
}

const useInventoryRequest = (): UseMutationResult<any, unknown, any, unknown> => {
  return useMutation((formData: any) => {
    return api.getInventoryRailData(formData)
  })
}

export {useDelayRequest, useInventoryRequest}
