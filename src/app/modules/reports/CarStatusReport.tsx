import {useFormik} from 'formik'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import {useCarStatusRequest} from './core/_hooks'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import MainGrid from '../../../_cloner/helpers/components/MainGrid'
import {InventoryRails} from '../../../_cloner/helpers/grid-value/inventory-rails'
import Input from '../../../_cloner/helpers/components/Modules/Input'
import {CarStatus} from '../../../_cloner/helpers/grid-value/car-status'
// import {DownloadExcelFile} from '../../../_cloner/helpers/downloadExcel'

const CarStatusReport = () => {
  const initialValues = {
    productNo: 0,
    chassisNo: '',
  }

  const {mutate, data: carStatus, isLoading} = useCarStatusRequest()

  // const outputFilename = `LotteryValidApplicants${Date.now()}.csv`
  // DownloadExcelFile(data, outputFilename)

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
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
    <Card5 title='گزارش وضعیت یک خودرو' image='/media/svg/brand-logos/aven.svg'>
      <form onSubmit={formik.handleSubmit} className='grid grid-cols-2'>
        <section className=''>
          <div className='flex flex-row gap-16 w-full'>
            <Input
              type='number'
              search={true}
              getFieldProps={formik.getFieldProps}
              touched={formik.touched.productNo}
              errors={formik.errors.productNo}
              name={'productNo'}
              title='شماره ساخت'
            ></Input>
            <Input
              type='text'
              search={true}
              getFieldProps={formik.getFieldProps}
              touched={formik.touched.chassisNo}
              errors={formik.errors.chassisNo}
              name={'chassisNo'}
              title='شماره شاسی'
            ></Input>
          </div>
          <div className='flex items-end justify-end'>
            <ActionButton loading={isLoading} title='جستجو' />
          </div>
        </section>
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

export default CarStatusReport
