import {useFormik} from 'formik'
import * as Yup from 'yup'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import {useInventoryRequest} from './core/_hooks'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import MainGrid from '../../../_cloner/helpers/components/MainGrid'
import SelectOption from '../../../_cloner/helpers/components/Modules/SelectOption'
import {useParkings} from '../../../_cloner/hooks/_hooks'
import {InventoryRails} from '../../../_cloner/helpers/grid-value/inventory-rails'
import {DownloadExcelFile} from '../../../_cloner/helpers/downloadExcel'

const InventoryRailReport = () => {
  const validatioSchema = Yup.object().shape({
    parkingNo: Yup.string().required('انتخاب پارکینگ اجباری می باشد'),
  })

  const initialValues = {
    parkingNo: '',
  }

  const {data: parkings} = useParkings()
  const filterRailParkings = parkings?.result.filter((item: any) => item.logistic === 9)

  const {mutate, data: inventoryData, isLoading} = useInventoryRequest()

  // const outputFilename = `LotteryValidApplicants${Date.now()}.csv`
  // DownloadExcelFile(data, outputFilename)

  const formik = useFormik({
    initialValues,
    validationSchema: validatioSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      console.log(values)
      try {
        mutate(values.parkingNo, {
          onSuccess: (_) => {},
        })
        setSubmitting(false)
      } catch (error) {
        setStatus('اطلاعات ورود نادرست می باشد')
        setSubmitting(false)
      }
    },
  })

  return (
    <Card5 title='گزارش موجودی پارکینگ های ریلی' image='/media/svg/brand-logos/aven.svg'>
      <form onSubmit={formik.handleSubmit} className='grid grid-cols-2'>
        <section className=''>
          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.parkingNo}
            errors={formik.errors.parkingNo}
            name={'parkingNo'}
            title='پارکینگ ها'
          >
            <option value='Active'>انتخاب کنید...</option>
            {filterRailParkings?.map((item: any) => {
              return <option value={item.loC_CODE}>{item.loC_NAME}</option>
            })}
          </SelectOption>

          <div className='flex items-end justify-end'>
            <ActionButton loading={isLoading} title='جستجو' />
          </div>
        </section>
      </form>
      {/* <section>
        <button onClick={}>خروجی اکسل</button>
      </section> */}
      <section className='mt-8'>
        <span className='font-VazirBold text-xl py-8'>نتیجه گزارش</span>
        <MainGrid data={inventoryData} columnDefs={InventoryRails} />
      </section>
    </Card5>  
  )
}

export default InventoryRailReport
