import {useFormik} from 'formik'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import {useCarStatusRequest} from './core/_hooks'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import MainGrid from '../../../_cloner/helpers/components/MainGrid'
import {InventoryRails} from '../../../_cloner/helpers/grid-value/inventory-rails'
import Input from '../../../_cloner/helpers/components/Modules/Input'
import {CarStatus} from '../../../_cloner/helpers/grid-value/car-status'
import SelectOption from '../../../_cloner/helpers/components/Modules/SelectOption'
import {useContractors, useDrivers, useParkings, useShippingTypes} from '../../../_cloner/hooks/_hooks'
import { useState } from 'react'
// import {DownloadExcelFile} from '../../../_cloner/helpers/downloadExcel'

const LandingStatusReport = () => {
  const initialValues = {
    BLandId: 0,
    BlandSerialNo: '',
    contId: 0,
    transType: 0,
    driverId: 0,
    originId: 0,
    destId: 0,
    StatusId: [],
  }

  const {data: contractors} = useContractors()
  const {data: shippingType} = useShippingTypes()
  const {data: drivers} = useDrivers()
  const {data: parkings} = useParkings()
  const [statusId, setStatusId] = useState([1,2,3,4,5])


  const {mutate, data: carStatus, isLoading} = useCarStatusRequest()

  // const outputFilename = `LotteryValidApplicants${Date.now()}.csv`
  // DownloadExcelFile(data, outputFilename)

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      console.log(values)
      try {
        mutate(
          {...values},
          {
            onSuccess: (_) => {},
          }
        )
        setSubmitting(false)
      } catch (error) {
        setStatus('اطلاعات ورود نادرست می باشد')
        setSubmitting(false)
      }
    },
  })

  

  return (
    <Card5 title='گزارش حواله های صادر شده' image='/media/svg/brand-logos/aven.svg'>
      <form onSubmit={formik.handleSubmit} className=''>
        <section className='grid grid-cols-2'>
          <div className='flex w-full flex-row gap-16'>
            <Input
              type='number'
              search={true}
              getFieldProps={formik.getFieldProps}
              touched={formik.touched.BLandId}
              errors={formik.errors.BLandId}
              name={'BLandId'}
              title='شماره حواله'
            ></Input>
            <Input
              type='text'
              search={true}
              getFieldProps={formik.getFieldProps}
              touched={formik.touched.BlandSerialNo}
              errors={formik.errors.BlandSerialNo}
              name={'BlandSerialNo'}
              title='شماره سریال'
            ></Input>
          </div>
        </section>
        <section className='grid grid-cols-3'>
          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.contId}
            errors={formik.errors.contId}
            name={'contId'}
            title='پیمانکاران'
          >
            <option value='Active'>انتخاب کنید...</option>
            {contractors?.result?.map((item: any) => {
              return <option value={item.p_ID}>{item.p_NAME}</option>
            })}
          </SelectOption>

          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.transType}
            errors={formik.errors.transType}
            name={'transType'}
            title='نوع حمل'
          >
            <option value='Active'>انتخاب کنید...</option>
            {shippingType?.result?.map((item: any) => {
              return <option value={item.id}>{item.description}</option>
            })}
          </SelectOption>

          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.driverId}
            errors={formik.errors.driverId}
            name={'driverId'}
            title='رانندگان'
          >
            <option value='Active'>انتخاب کنید...</option>
            {drivers?.map((item: any) => {
              return <option value={item.driverID}>{item.driverName}</option>
            })}
          </SelectOption>
        </section>
        <section className='grid grid-cols-3'>
          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.originId}
            errors={formik.errors.originId}
            name={'originId'}
            title='مبدا'
          >
            <option value='Active'>انتخاب کنید...</option>
            {parkings?.result?.map((item: any) => {
              return <option value={item.loC_CODE}>{item.loC_NAME}</option>
            })}
          </SelectOption>

          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.destId}
            errors={formik.errors.destId}
            name={'destId'}
            title='مقصد'
          >
            <option value='Active'>انتخاب کنید...</option>
            {parkings?.result?.map((item: any) => {
              return <option value={item.loC_CODE}>{item.loC_NAME}</option>
            })}
          </SelectOption>

          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.StatusId}
            errors={formik.errors.StatusId}
            multiple={true}
            name={'StatusId'}
            title='وضعیت'
          >
            <option value='Active'>انتخاب کنید...</option>
            {shippingType?.map((item: any) => {
              return <option value={item.id}>{item.description}</option>
            })}
          </SelectOption>
        </section>
        <div className='flex items-end justify-end'>
          <ActionButton loading={isLoading} title='جستجو' />
        </div>
      </form>
      {/* <section>
        <button onClick={}>خروجی اکسل</button>
      </section> */}
      <section className='mt-8'>
        <span className='py-8 font-VazirBold text-xl'>نتیجه گزارش</span>
        <MainGrid data={carStatus} columnDefs={CarStatus} />
      </section>
    </Card5>
  )
}

export default LandingStatusReport
