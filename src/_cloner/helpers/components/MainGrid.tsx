import {FC, useMemo} from 'react'
import {AgGridReact} from 'ag-grid-react' // the AG Grid React Component
import '../../assets/css/agGrid.css' // Core grid CSS, always needed

interface IProps {
  data?: any
  columnDefs?: any
  rowSelection?: any
  rowMultiSelectWithClick?: boolean
}

const MainGrid: FC<IProps> = ({data, columnDefs, rowSelection, rowMultiSelectWithClick}) => {

  const output = document.getElementById("ag-4-start-page");
  if (output) output.innerText = 'صفحه'
  const output_Of = document.getElementById("ag-4-of-page");
  if (output_Of) output_Of.innerText = 'از'
  const output_to = document.getElementById("ag-4-to");
  if (output_to) output_to.innerText = 'به'
  const output_of1 = document.getElementById("ag-4-of");
  if (output_of1) output_of1.innerText = 'از'
  

  const defaultColDef = useMemo(() => {
    return {
        flex: 1,
        sortable: true,
        minWidth: 200,
        resizable: true,
        floatingFilter: true,
    };
}, []);


  const autoGroupColumnDef = useMemo(() => {
    return {
        headerName: 'Athlete',
        field: 'athlete',
        minWidth: 250,
        cellRenderer: 'agGroupCellRenderer',
        cellRendererParams: {
            checkbox: true,
        },
    };
}, []);


  return (
    <div className='ag-theme-alpine'>
      <AgGridReact
        rowData={data}
        className='font-Vazir'
        columnDefs={columnDefs}
        enableRtl={true}
        overlayNoRowsTemplate='داده ای برای نمایش وجود ندارد'
        overlayLoadingTemplate='...در حال بارگزاری'
        domLayout='autoHeight'
        paginationAutoPageSize={true}
        rowSelection={rowSelection}
        rowMultiSelectWithClick={rowMultiSelectWithClick}
        // pagination={true}
        cacheQuickFilter={true}
        paginationPageSize={10}
        autoGroupColumnDef={autoGroupColumnDef}
        defaultColDef={defaultColDef}
        suppressRowVirtualisation={true}
        suppressColumnVirtualisation={true}
        suppressAggFuncInHeader={true}
        suppressRowDeselection={true}
/>
    </div>
  )
}

export default MainGrid
