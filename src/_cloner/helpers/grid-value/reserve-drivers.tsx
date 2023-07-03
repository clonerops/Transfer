import { toAbsoluteUrl } from "../AssetHelpers";

export const ReserveGrid = (openModal: any) => {
    return [
        {
            field: "id",
            headerName: "شماره پیگیری",
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "font-weight": "bold",
            },
            maxWidth: 100,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            cellRenderer: (params: any) => params.data.driverInfo.driverName,
            headerName: "نام راننده",
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            minWidth: 200,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            cellRenderer: (params: any) => params.data.driverInfo.mobile,
            headerName: "شماره همراه راننده",
            minWidth: 180,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "ladingLocationName",
            headerName: "محل بارگیری",
            minWidth: 200,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "ladingLocationName",
            headerName: "استان ها",
            cellRenderer: (params: any) => {
                return <ul className='flex justify-center items-center'>
                    {
                        params.data.transportTurnLocs.map((item: any) => <li className="px-4">{item?.provinceName}</li>)
                    }
                </ul>
            },
            minWidth: 300,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "attendanceDate",
            headerName: "تاریخ حضور",
            minWidth: 200,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "contractorName",
            headerName: "نام پیمانکار",
            // cellRenderer: params => params.data.contractorName === "" ? <span>..............</span> : params.data.contractorName,
            minWidth: 200,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "createDate",
            headerName: "تاریخ ثبت درخواست",
            minWidth: 160,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "transportTurnStatusId",
            headerName: "وضعیت درخواست",
            cellRenderer: (params: any) =>
                params.data.transportTurnStatusId === 1 ? (
                    <span className="text-warning">در دست بررسی</span>
                ) : params.data.transportTurnStatusId === 2 ? (
                    <span className="text-success">تایید شده</span>
                ) : (
                    <span className="text-red-600">لغو شده</span>
                ),
            minWidth: 200,
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
            headerName: "",
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
            cellRenderer: function (params: any) {
                return (
                    <button
                        disabled={[2, 3].includes(
                            params.data.transportTurnStatusId
                        )}
                        className="flex items-center justify-center gap-10 pt-2"
                    >
                        <img
                            src={toAbsoluteUrl(
                                "/media/icons/duotune/files/edit.png"
                            )}
                            className="h-[24px] w-[24px] cursor-pointer"
                            onClick={() => openModal(params.data)}
                        />
                    </button>
                );
            },
        },
    ];
};
