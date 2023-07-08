import {  useMutation, useQuery } from "@tanstack/react-query"
import * as api from './_requests'

const useGetCarsByUserId = () => {
    return useQuery(['cars'], api.getCarsByUserId)
}

const useGetBillandingDetail = () => {
    return useMutation((id: number) => {
        return api.getBillandingDetail(id)
    })
}

export { useGetCarsByUserId, useGetBillandingDetail }