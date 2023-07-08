import { useQuery } from "@tanstack/react-query";
import * as api from "../requets/_requests";

const useParkings = () => {
    return useQuery(["parkings"], api.getParkings, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};

const useContractors = () => {
    return useQuery(["contractors"], api.getContractors, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};

const useShippingTypes = () => {
    return useQuery(["shippingTypes"], api.getShippingTypes, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};

const useDrivers = () => {
    return useQuery(["drivers"], api.getDrivers, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};

const useDealers = () => {
    return useQuery(["dealers"], api.getDelaers, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};

const usePlateList = () => {
    return useQuery(["plateList"], api.getPlateList, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};

const useProvince = () => {
    return useQuery(["provinces"], api.getProvince, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};

const useCity = (id: number) => {
    return useQuery(["cities", id], () => api.getCity(id), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};

const useBillandingStatus = () => {
    return useQuery(["BlStatus"], api.getBillandingStatus, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};

const useLandingLocation = () => {
    return useQuery(["landingLocation"], api.getLandingLocation, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};

export {
    useParkings,
    useContractors,
    useShippingTypes,
    useDrivers,
    useDealers,
    usePlateList,
    useProvince,
    useCity,
    useBillandingStatus,
    useLandingLocation,
};
