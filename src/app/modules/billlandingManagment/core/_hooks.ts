import { useMutation, useQuery } from "@tanstack/react-query";
import * as api from "./_requests";
import { ExitModel, ReceiptBilllanding, TransferModel } from "./_models";

const useGetCarsByUserId = () => {
    return useQuery(["cars"], api.getCarsByUserId);
};

const useGetBillandingDetail = () => {
    return useMutation((id: number) => {
        return api.getBillandingDetail(id);
    });
};

const useCancelBilllanding = () => {
    return useMutation((id: number) => {
        return api.cancelBilllanding(id);
    });
};

const useExitBilllanding = () => {
    return useMutation((formData: ExitModel) => {
        return api.exitBilllanding(formData);
    });
};

const useTransferBilllanding = () => {
    return useMutation((formData: TransferModel) => {
        return api.transferBilllanding(formData);
    });
};

const useReceiptBilllanding = () => {
    return useMutation((formdata: ReceiptBilllanding) => {
        return api.receiptBilllanding(formdata);
    });
};

export {
    useGetCarsByUserId,
    useGetBillandingDetail,
    useCancelBilllanding,
    useExitBilllanding,
    useTransferBilllanding,
    useReceiptBilllanding
};
