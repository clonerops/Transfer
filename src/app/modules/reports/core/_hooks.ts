import {useQuery, useMutation, QueryClient} from 'react-query'
import * as api from './_requests'

const queryCache = new QueryClient()

const useCarDelayData = () => {
  return useQuery('carDelayData')
}

const CarDelayRequest = useMutation(api.getCarDelayData, {
        onSuccess: () => {
        //   const data = queryCache.getQueryData('carDelayData')
          queryCache.setQueryData('carDelayData', "asdadad")
        },
      })

export {useCarDelayData, CarDelayRequest}
