import {FC} from 'react'

interface IProps {
  title: string
  width?: string
}

const SelectAndLabel: FC<IProps> = ({title, width = 'w-[14rem]'}) => {
  return (
    <section className='flex items-center p-1 py-2'>
      <label className='font-IRANSans text-md inline-block w-[150px] pl-2 text-left'>
        {title}:
      </label>
      <select
        // name='status'
        // data-control='select2'
        // data-hide-search='true'
        className={`form-select border border-gray-400 form-select-sm form-select-white p-2 ${width}`}
        defaultValue='Active'
      >
        <option value='Active'>راهنمایی</option>
        <option value='Approved'>شکایت</option>
        <option value='Declined'>درخواست</option>
      </select>{' '}
    </section>
  )
}

export default SelectAndLabel
