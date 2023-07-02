import {useDeleteNews} from '../../../app/modules/content/core/_hooks'
import {toAbsoluteUrl} from '../AssetHelpers'

export const NewsGrid = (openModal: any) => {
  const {mutate} = useDeleteNews()

  return [
    {
      field: 'title',
      headerName: 'عنوان',
      minWidth: 280,
      cellStyle: {
        'white-space': 'normal',
        'font-size': '12px',
        'text-align': 'center',
        'font-weight': 'bold',
      },
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'content',
      headerName: 'محتوا',
      minWidth: 380,
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'type',
      minWidth: 80,
      cellRenderer: function (params: any) {
        return params.data.type === 1 ? (
          <span className='text-warning'>اخبار</span>
        ) : (
          <span className='text-success'>اطلاعیه</span>
        )
      },
      headerName: 'نوع',
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'status',
      minWidth: 80,
      cellRenderer: function (params: any) {
        return params.data.status === 1 ? (
          <span className='text-success'>انتشار</span>
        ) : (
          <span className='text-danger'>عدم انتشار</span>
        )
      },
      headerName: 'وضعیت',
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    
    {
      field: 'Row',
      headerName: 'عملیات',
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      headerClass: 'bg-indigo-500 text-white',
      cellClass: 'grid-cell-centered',
      maxWidth: 180,
      cellRenderer: function (params: any) {
        return (
          <div className='flex items-center justify-center gap-10 pt-2'>
            <img
              src={toAbsoluteUrl('/media/icons/duotune/files/delete.png')}
              className='h-[24px] w-[24px] cursor-pointer'
              onClick={() => mutate(params.data.id)}
            />
            <img
              src={toAbsoluteUrl('/media/icons/duotune/files/edit.png')}
              className='h-[24px] w-[24px] cursor-pointer'
              onClick={() => openModal(params.data)}
            />
          </div>
        )
      },
    },
  ]
}
