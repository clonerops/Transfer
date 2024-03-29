/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {toAbsoluteUrl, KTSVG} from '../../../helpers'
import {Dropdown1} from '../dropdown/Dropdown1'

type Props = {
  image: string
  title: string
  modalCard?:boolean
  children: React.ReactNode
}

const Card5: FC<Props> = ({
  image,
  title,
  modalCard,
  children
}) => {
  return (
    <div className={`card ${modalCard ? 'h-1-1': 'h-full'}  shadow-lg`}>
      <div className='card-header flex-nowrap border-0 pt-1'>
        <div className='card-title m-0'>
          <div className='symbol symbol-45px w-45px bg-light me-5'>
            <img src={toAbsoluteUrl(image)} alt='Metronic' className='p-3' />
          </div>

          <a href='#' className='fs-4 fw-bold text-hover-primary text-gray-600 m-0'>
            {title}
          </a>
        </div>
      </div>

      <div className='card-body px-9 pt-1 pb-4'>
        {children}
      </div>
    </div>
  )
}

export {Card5}
