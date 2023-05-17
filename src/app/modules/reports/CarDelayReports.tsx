import {useFormik} from 'formik'
import * as Yup from 'yup'
import Input from '../../../_cloner/helpers/components/Modules/Input'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import { TablesWidget } from '../../../_cloner/helpers/components/TablesWidget'
import CardDelayColumns from '../../../_cloner/fakedata/cardelarcolumns.json'
import { useCarDelay } from './core/_hooks'
import { useState } from 'react'

const CarDelayReports = () => {
  const [value, setValue] = useState("")
  const validatioSchema = Yup.object().shape({
    productNo: Yup.string().required('شماره ساخت اجباری می باشد'),
  })

  const initialValues = {
    productNo: "",
  }

  const { data: carDelay }: any = useCarDelay(parseInt(value))
  console.log("carDelay", carDelay)

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: validatioSchema,
  //   onSubmit: async (values, {setStatus, setSubmitting}) => {
  //     try {
  //       setValue(values.productNo)
  //     } catch (error) {
  //       setStatus('اطلاعات ورود نادرست می باشد')
  //       setSubmitting(false)
  //     }
  //   },
  // })

  return (
    <Card5
      title='گزارش تاخیر زمان تحویل خودرو به نمایندگی توسط پیمانکار'
      image='/media/svg/brand-logos/aven.svg'
    >
      <form>
        <section className='w-50'>
          <Input
            type='number'
            search={true}
            // getFieldProps={formik.getFieldProps}
            // touched={formik.touched.productNo}
            // errors={formik.errors.productNo}
            name={'productNo'}
            title='شماره ساخت'
          ></Input>
        </section>
      </form>
      <TablesWidget columns={CardDelayColumns} title='نتیجه گزارش' />
    </Card5>
  )
}

export default CarDelayReports
