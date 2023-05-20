import {useMutation, UseMutationResult} from 'react-query'
import * as api from './_requests'
import {BillandingChart, CarChart, CarStatusRequest} from './_models'

const useDelayRequest = (): UseMutationResult<any, unknown, any, unknown> => {
  return useMutation((formData: any) => {
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

const useBillandingChartRequest = (): UseMutationResult<any, unknown, any, unknown> => {
  return useMutation((formData: BillandingChart) => {
    console.log('formData', formData)
    return api.getBillandigChartRequest(formData)
  })
}

const useCarChartRequest = (): UseMutationResult<any, unknown, any, unknown> => {
  return useMutation((formData: CarChart) => {
    console.log('formData', formData)
    return api.getCarChartRequest(formData)
  })
}

export {
  useDelayRequest,
  useInventoryRequest,
  useCarStatusRequest,
  useBillandingChartRequest,
  useCarChartRequest,
}
