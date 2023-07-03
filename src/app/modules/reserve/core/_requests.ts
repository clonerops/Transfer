import moment from "moment-jalaali";
import { dashboardHttp } from "../../../../_cloner/helpers/apiConfig";
import { ConfirmReserve, ReserveModel } from "./_models";
import { oneMonthLater } from "../../../../_cloner/helpers/set-date";

const getCustomReserved = async () => {    
    const { data } = await dashboardHttp.get("/TransportTurn", {
        headers: {
            AttendDateFrom: moment(Date.now()).format("jYYYY/jMM/jDD"),
            AttendDateTo: moment(oneMonthLater()).format("jYYYY/jMM/jDD"),
            ProvinceId: 0,
            LadingLocId: 0,
        },
    });
    return data;
};

const getReserved = async (formData: ReserveModel) => {
    const { data } = await dashboardHttp.get("/TransportTurn", {
        headers: {
            AttendDateFrom: formData.AttendDateFrom,
            AttendDateTo: formData.AttendDateTo,
            ProvinceId: formData.ProvinceId,
            LadingLocId: formData.LadingLocId,
        },
    });
    return data;
};

const confirmReserve = async (formData: ConfirmReserve) => {
    const { data } = await dashboardHttp.put(
        "/TransportTurn/ConfirmTransportTurn",
        JSON.stringify(formData)
    );
    return data;
};

export { getCustomReserved, getReserved, confirmReserve };
