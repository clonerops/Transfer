import { useMutation, useQuery } from "react-query";
import { ConfirmReserve, ReserveModel } from "./_models";
import * as api from "./_requests";
import { useQueryClient } from "@tanstack/react-query";

const useGetCustomReserve = () => {
    return useQuery(["reserve"], api.getCustomReserved);
};

const useGetReserve = () => {
    const queryClient = useQueryClient();
    return useMutation((formData: ReserveModel) => {
        queryClient.setQueryData(["reserve"], api.getReserved(formData));
        return api.getReserved(formData);
    });
};

const useConfirmReserve = () => {
    return useMutation((formData: ConfirmReserve) => {
        return api.confirmReserve(formData);
    });
};

export { useGetCustomReserve, useGetReserve, useConfirmReserve };
