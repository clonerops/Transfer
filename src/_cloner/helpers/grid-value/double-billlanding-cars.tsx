import { toAbsoluteUrl } from "../AssetHelpers";

export const doubleBilllandingCarsGrid = (selected: any, setSelected: any) => {
    return [
        {
            field: "proD_NO",
            headerName: "شماره ساخت",
            minWidth: 140,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "chassiS_NO",
            headerName: "شماره شاسی",
            minWidth: 280,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "caR_CLASS_NAME",
            headerName: "نام خودرو",
            minWidth: 140,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "clR_DESC",
            headerName: "رنگ خودرو",
            minWidth: 140,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "p_DLVR_DATE",
            headerName: "تاریخ تحویل",
            minWidth: 140,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "plaquE_RECEIPT_DATE",
            headerName: "تاریخ رسید پلاک",
            minWidth: 140,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "companyname",
            headerName: "شرکت سازنده",
            minWidth: 140,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "loC_NAME",
            headerName: "پارکینگ",
            minWidth: 280,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "brnC_DLVR_NAME",
            headerName: "نمایندگی",
            minWidth: 240,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "prvN_NAME",
            headerName: "استان",
            minWidth: 140,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "citY_NAME",
            headerName: "شهر",
            minWidth: 140,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "Row",
            headerName: "عملیات",
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            headerClass: "bg-indigo-500 text-white",
            cellClass: "grid-cell-centered",
            maxWidth: 180,
            cellRenderer: function (params: any) {
                return (
                    <div className="flex items-center justify-center gap-10 pt-2">
                        <img
                            src={toAbsoluteUrl(
                                "/media/icons/duotune/files/delete.png"
                            )}
                            className="h-[24px] w-[24px] cursor-pointer"
                            onClick={() => {
                                const copyCars = [...selected];
                                copyCars.splice(params.node.rowIndex, 1);
                                setSelected([...copyCars]);
                            }}
                        />
                    </div>
                );
            },
        },
    ];
};
