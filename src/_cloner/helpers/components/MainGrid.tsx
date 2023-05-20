import {FC} from 'react'
import {AgGridReact} from 'ag-grid-react' // the AG Grid React Component
import '../../assets/css/agGrid.css' // Core grid CSS, always needed

interface IProps {
  data?: any
  columnDefs?: any
}

const MainGrid: FC<IProps> = ({data, columnDefs}) => {

  const output = document.getElementById("ag-4-start-page");
  if (output) output.innerText = 'صفحه'
  const output_Of = document.getElementById("ag-4-of-page");
  if (output_Of) output_Of.innerText = 'از'
  const output_to = document.getElementById("ag-4-to");
  if (output_to) output_to.innerText = 'به'
  const output_of1 = document.getElementById("ag-4-of");
  if (output_of1) output_of1.innerText = 'از'
  
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
        pagination={true}
      />
    </div>
  )
}

export default MainGrid
