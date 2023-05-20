import {useMutation, UseMutationResult} from 'react-query'
import * as api from './_requests'
import { CarStatusRequest } from './_models'


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

const useCarStatusRequest = (): UseMutationResult<any, unknown, any, unknown> => {
  return useMutation((formData: CarStatusRequest) => {
      return api.getCarStatusData(formData)
  })
}


export {useDelayRequest, useInventoryRequest, useCarStatusRequest}
