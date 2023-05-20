export const CarDelayGridValue = [
    {
        field: "billlandingid",
        headerName: 'بارنامه',
        cellStyle: { 'white-space': 'normal', 'font-size': '12px', 'font-weight': 'bold' },
        maxWidth: 100,
        headerClass: 'bg-indigo-500 text-white'
    },
    {
        field: "prod_no",
        headerName: 'شماره ساخت',
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        minWidth: 120,
        headerClass: 'bg-indigo-500 text-white'
    },
    {
        field: "dealerName",
        headerName: 'نمایندگی',
        minWidth: 260,
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        headerClass: 'bg-indigo-500 text-white'
    },
    {
        field: "driveR_NAME",
        headerName: 'راننده',
        minWidth: 200,
        // cellRenderer: (params: { data: { driveR_NAME: string } }) => params.data.driveR_NAME === "" ? <span>..............</span> : params.data.driveR_NAME,
        cellStyle: { 'color': '#FFF' },
        autoHeight: true,
        headerClass: 'bg-indigo-500 text-white'
    },
    {
        field: "originDesc",
        headerName: 'مبدا',
        minWidth: 200,
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        headerClass: 'bg-indigo-500 text-white'
    },
    {
        field: "destinationDesc",
        headerName: 'مقصد',
        minWidth: 200,
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        headerClass: 'bg-indigo-500 text-white'
    },
    {
        field: "contractorDlvrDate",
        headerName: 'تاریخ تحویل به پیمانکار',
        minWidth: 200,
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        headerClass: 'bg-indigo-500 text-white'
    },
    {
        field: "intervalTimeLong",
        headerName: 'زمان مطابق برنامه',
        minWidth: 160,
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        headerClass: 'bg-indigo-500 text-white'
    },
    {
        field: "transferTimeLong_str",
        headerName: 'زمان طی شده',
        minWidth: 260,
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        headerClass: 'bg-indigo-500 text-white'
    },

]