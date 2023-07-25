import React, { FC } from 'react'

interface IProps {
    title: string
    onClick: () => void
}

const Button:FC<IProps> = ({title, onClick}) => {
  return (
    <button onClick={onClick} className='my-4 w-[50px] rounded-md border border-transparent bg-green-500 px-4 py-2 font-Yekan text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'>
      <span className='text-base'>{title}</span>
    </button>
  )
}

export default Button
