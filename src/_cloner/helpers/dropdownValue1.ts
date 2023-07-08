export const dropdownContractor = (data: any) => {
    return (
        data &&
        data?.map((obj: { p_ID: any; p_NAME: any }): any => {
            const { p_ID, p_NAME } = obj;
            return { value: p_ID, label: p_NAME };
        })
    );
};
export const dropdownShippingTypes = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: any; description: any }): any => {
            const { id, description } = obj;
            return { value: id, label: description };
        })
    );
};
export const dropdownDrivers = (data: any) => {
    return (
        data &&
        data?.map((obj: { driverID: any; driverName: any, plateId: any }): any => {
            const { driverID, driverName, plateId } = obj;
            return { value: driverID, label: driverName, plateId: plateId };
        })
    );
};
export const dropdownPlates = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: any; platE_NO: any }): any => {
            const { id, platE_NO } = obj;
            return { value: id, label: platE_NO };
        })
    );
};
export const dropdownParkings = (data: any) => {
    return (
        data &&
        data?.map((obj: { loC_CODE: any; loC_NAME: any }): any => {
            const { loC_CODE, loC_NAME } = obj;
            return { value: loC_CODE, label: loC_NAME };
        })
    );
};
