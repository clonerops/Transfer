import { useDeleteTicket } from "../../../app/modules/content/core/_hooks";
import { toAbsoluteUrl } from "../AssetHelpers";

export const TicketGrid = (openModal: any) => {
    const { mutate } = useDeleteTicket();

    return [
        {
            field: "ticketDesc",
            headerName: "درخواست",
            minWidth: 280,
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "font-weight": "bold",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "answerDesc",
            minWidth: 260,
            headerName: "پاسخ",
            cellStyle: { "font-size": "12px", "text-align": "center" },
            // autoHeight: false,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "driverName",
            minWidth: 180,
            headerName: "ثبت کننده",
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
            headerName: "تاریخ ثبت",
            cellStyle: {
                "white-space": "normal",
                "font-size": "12px",
                "text-align": "center",
            },
            autoHeight: true,
            headerClass: "bg-indigo-500 text-white",
        },
        {
            field: "description",
            minWidth: 180,
            headerName: "وضعیت",
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
                            onClick={() => mutate(params.data.id)}
                        />
                        <img
                            src={toAbsoluteUrl(
                                "/media/icons/duotune/files/edit.png"
                            )}
                            className="h-[24px] w-[24px] cursor-pointer"
                            onClick={() => openModal(params.data)}
                        />
                    </div>
                );
            },
        },
    ];
};
