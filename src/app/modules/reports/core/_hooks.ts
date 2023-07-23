import {useMutation, UseMutationResult} from 'react-query'
import * as api from './_requests'
import {BillandingChart, CarChart, CarStatusRequest, LandigStatus, TemporaryStatus} from './_models'

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
    return api.getBillandigChartRequest(formData)
  })
}

const useCarChartRequest = (): UseMutationResult<any, unknown, any, unknown> => {
  return useMutation((formData: CarChart) => {
    return api.getCarChartRequest(formData)
  })
}
const useLandingStatusRequest = (): UseMutationResult<any, unknown, any, unknown> => {
  return useMutation((formData: LandigStatus) => {
    return api.getLandingStatus(formData)
  })
}
const useTemporaryStatusRequest = (): UseMutationResult<any, unknown, any, unknown> => {
  return useMutation((formData: TemporaryStatus) => {
    return api.getTemporaryStatus(formData)
  })
}

export {
  useDelayRequest,
  useInventoryRequest,
  useCarStatusRequest,
  useBillandingChartRequest,
  useCarChartRequest,
  useLandingStatusRequest,
  useTemporaryStatusRequest
}
