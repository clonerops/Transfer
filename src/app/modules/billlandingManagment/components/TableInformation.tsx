/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTSVG } from '../../../../_cloner/helpers'

type Props = {
  className: string
}

const TableInformation: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='min-w-150px'>شماره حواله</th>
                <th className='min-w-140px'>تاریخ ثبت حواله</th>
                <th className='min-w-120px'>بارنامه جاده ای</th>
                <th className='min-w-100px'>پیمانکار حمل</th>
                <th className='min-w-120px'>راننده</th>
                <th className='min-w-120px'>کدملی</th>
                <th className='min-w-120px'>شماره پلاک انتظامی</th>
                <th className='min-w-120px'>مبدا</th>
                <th className='min-w-120px'>مقصد</th>
                <th className='min-w-120px'>نوع حمل</th>
                <th className='min-w-120px'>وضعیت</th>
                <th className='min-w-120px'>توضیحات</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        فرهاد معصومی
                      </a>
                      {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        HTML, JS, ReactJS
                      </span> */}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export { TableInformation }
