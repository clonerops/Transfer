import {useDeleteStaticLinks} from '../../../app/modules/content/core/_hooks'
import {toAbsoluteUrl} from '../AssetHelpers'

export const StaticLinks = (openModal: any) => {

  const {mutate} = useDeleteStaticLinks()

  return [
    {
      field: 'name',
      headerName: 'نام',
      cellStyle: {
        'white-space': 'normal',
        'font-size': '12px',
        'font-weight': 'bold',
        'text-align': 'center',
      },
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'content',
      headerName: 'آدرس',
      flex: 1,
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'description',
      headerName: 'توضیحات',
      flex: 1,
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      autoHeight: true,
      headerClass: 'bg-indigo-500 text-white',
    },
    {
      field: 'Row',
      headerName: 'عملیات',
      cellStyle: {'white-space': 'normal', 'font-size': '12px', 'text-align': 'center'},
      flex: 1,
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
