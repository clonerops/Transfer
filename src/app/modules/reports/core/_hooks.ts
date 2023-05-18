import {useQuery, useMutation, UseMutationResult} from 'react-query'
import * as api from './_requests'


const useCarDelayData = () => {
  return useQuery('carDelayData')
}

const useDelayRequest = (): UseMutationResult<any, unknown, any, unknown> => {
    return useMutation((formData:any) => {
        return api.getCarDelayData(formData)
    })
}

export {useCarDelayData, useDelayRequest}
