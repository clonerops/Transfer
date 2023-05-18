import {useFormik} from 'formik'
import * as Yup from 'yup'
import Input from '../../../_cloner/helpers/components/Modules/Input'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import {TablesWidget} from '../../../_cloner/helpers/components/TablesWidget'
import CardDelayColumns from '../../../_cloner/fakedata/cardelarcolumns.json'
import { useDelayRequest} from './core/_hooks'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'

const CarDelayReports = () => {

  const validatioSchema = Yup.object().shape({
    productNo: Yup.string().required('شماره ساخت اجباری می باشد'),
  })

  const initialValues = {
    productNo: '',
  }

  const { mutate, data: carDelayData, isLoading } = useDelayRequest();

  // 111060557

  const formik = useFormik({
    initialValues,
    validationSchema: validatioSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      try {
        // const { data: carDelay } = await getCarDelayData(parseInt(values.productNo))
        // setData(carDelay)
        mutate(values.productNo, {
          onSuccess: (response) => {
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
      <TablesWidget loading={isLoading} columns={CardDelayColumns} delayData={carDelayData} delay={true} title='نتیجه گزارش' />
    </Card5>
  )
}

export default CarDelayReports
