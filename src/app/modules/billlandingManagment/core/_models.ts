export interface CarModel {
    id: number;
    plaquE_RECEIPT_DATE: string;
    p_DLVR_DATE: string;
    loC_NAME: string;
    p_NAME: string;
    loC_CODE: number;
    citY_NAME: string;
    citY_NO: number;
    prvN_NAME: string;
    prvN_NO: number;
    brnC_SHOW_ROOM_DESC: string;
    brnC_DLVR_NAME: string;
    brnC_DLVR: number;
    poliC_PLACK: string;
    companyname: string;
    caR_TYPE_NAME: string;
    caR_CLASS_NAME: string;
    caR_GRP_NAME: string;
    chassiS_NO: string;
    proD_NO: number;
    p_ID: number;
    clR_DESC: string;
    teL_NO: string;
    mobile_NO: string;
    address: string;
    statusId: number;
    statusDesc: string | null;
    statusRGBCode: string | null;
    selected: boolean;
    isSeparated: boolean;
    sitE_NAME: string | null;
    regioN_NO: number;
    regioN_NAME: string | null;
    wagonId: number;
    wagonDesc: string | null;
    carDestReceiptDate: string | null;
    parkingReceiptDate: string | null;
}


export interface ExitModel {
    billLandingId: number
    toStatus: number
    description: string
}