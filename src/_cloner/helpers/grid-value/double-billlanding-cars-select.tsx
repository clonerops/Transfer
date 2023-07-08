import {toAbsoluteUrl} from '../AssetHelpers'

export const doubleBilllandingCarSelectGrid = () => {

  return [
    {
      field: "proD_NO",
      filter: 'agTextColumnFilter',
      getQuickFilterText: (params: any) => {
          return params.value.name;
      }, headerName: 'شماره ساخت', minWidth: 180,  suppressMenu: false, checkboxSelection: true
  },
    {
      field: 'chassiS_NO',
      headerName: 'شماره شاسی',
      filter: 'agTextColumnFilter',
      minWidth: 140,
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'caR_CLASS_NAME',
      headerName: 'نام خودرو',
      filter: 'agTextColumnFilter',
      minWidth: 140,
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'clR_DESC',
      headerName: 'رنگ خودرو',
      filter: 'agTextColumnFilter',
      minWidth: 140,
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'p_DLVR_DATE',
      headerName: 'تاریخ تحویل',
      filter: 'agTextColumnFilter',
      minWidth: 140,
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'plaquE_RECEIPT_DATE',
      headerName: 'تاریخ رسید پلاک',
      filter: 'agTextColumnFilter',
      minWidth: 140,
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'companyname',
      headerName: 'شرکت سازنده',
      filter: 'agTextColumnFilter',
      minWidth: 140,
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'loC_NAME',
      headerName: 'پارکینگ',
      filter: 'agTextColumnFilter',
      minWidth: 140,
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'brnC_DLVR_NAME',
      headerName: 'نمایندگی',
      filter: 'agTextColumnFilter',
      minWidth: 240,
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'prvN_NAME',
      headerName: 'استان',
      filter: 'agTextColumnFilter',
      minWidth: 140,
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'citY_NAME',
      headerName: 'شهر',
      filter: 'agTextColumnFilter',
      minWidth: 140,
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
  ]
}
