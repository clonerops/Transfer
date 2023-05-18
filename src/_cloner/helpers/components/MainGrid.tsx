import {FC} from 'react'
import {AgGridReact} from 'ag-grid-react' // the AG Grid React Component
import '../../assets/css/agGrid.css' // Core grid CSS, always needed

interface IProps {
  data?: any
  columnDefs?: any
}

const MainGrid: FC<IProps> = ({data, columnDefs}) => {

    console.log('data?.length', data)

  const style = {
    height: data?.length > 4 ? 400 : 200,
    margin: '10px',
    boxShadow: '0px 6px 10px rgba( 0, 0, 0, 0.2 )',
  }

  return (
    <div className='ag-theme-alpine' style={style}>
      {/* <button onClick={onBtnExport}>Download CSV export file</button> */}
      <AgGridReact
        rowData={data}
        className='font-Vazir text-white'
        columnDefs={columnDefs}
        enableRtl={true}
        overlayNoRowsTemplate='داده ای برای نمایش وجود ندارد'
        overlayLoadingTemplate='...در حال بارگزاری'
      />
    </div>
  )
}

export default MainGrid
