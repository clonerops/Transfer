import {FC} from 'react'
interface IProps {
  title: string
  loading?: boolean
}

const ActionButton: FC<IProps> = ({title, loading}) => {
  return (
    // <button className='font-IRANSans w-[10rem] rounded-lg border border-indigo-300 bg-indigo-700 p-3 text-white'>
    //   {title}
    // </button>
    <section className='flex items-center p-1 py-2'>
      <label className='font-IRANSans text-md inline-block w-[150px] pl-2 text-left' />
      <button
        type='submit'
        disabled={loading}
        className='font-IRANSans float-left m-0 inline-block w-[14rem] rounded-md border border-gray-400 bg-indigo-500 p-1 text-lg text-white outline-none'
      >
        {!loading && <span className='indicator-label'>{title}</span>}
        {loading && (
          <span className='indicator-progress' style={{display: 'block'}}>
            درحال پردازش...
            <span className='spinner-border spinner-border-sm ms-2 align-middle'></span>
          </span>
        )}
      </button>
    </section>
  )
}

export default ActionButton
