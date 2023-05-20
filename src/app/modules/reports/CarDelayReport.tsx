import {useFormik} from 'formik'
import * as Yup from 'yup'
import Input from '../../../_cloner/helpers/components/Modules/Input'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import { useDelayRequest} from './core/_hooks'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import MainGrid from '../../../_cloner/helpers/components/MainGrid'
import { CarDelayGridValue } from '../../../_cloner/helpers/grid-value/car-delay'

const CarDelayReport = () => {

  const validatioSchema = Yup.object().shape({
    productNo: Yup.string().required('شماره ساخت اجباری می باشد'),
  })

  const initialValues = {
    productNo: '',
  }

  const { mutate, data: carDelayData, isLoading } = useDelayRequest();

  const formik = useFormik({
    initialValues,
    validationSchema: validatioSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      try {
        mutate(values.productNo, {
          onSuccess: (_) => {
          }
        })
        setSubmitting(false)
      } catch (error) {
        setStatus('اطلاعات ورود نادرست می باشد')
        setSubmitting(false)
      }
    },
  })

  return (
    <Card5
      title='گزارش تاخیر زمان تحویل خودرو به نمایندگی توسط پیمانکار'
      image='/media/svg/brand-logos/aven.svg'
    >
      <form onSubmit={formik.handleSubmit} className='grid grid-cols-2'>
        <section className='w-50'>
          <Input
            type='number'
            search={true}
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.productNo}
            errors={formik.errors.productNo}
            name={'productNo'}
            title='شماره ساخت'
          ></Input>
          <ActionButton loading={isLoading} title='جستجو' />
        </section>
      </form>
      <MainGrid data={carDelayData} columnDefs={CarDelayGridValue} />
    </Card5>
  )
}

export default CarDelayReport
