import {useFormik} from 'formik'
import * as Yup from 'yup'
import Input from '../../../_cloner/helpers/components/Modules/Input'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import {TablesWidget} from '../../../_cloner/helpers/components/TablesWidget'
import CardDelayColumns from '../../../_cloner/fakedata/cardelarcolumns.json'
import {CarDelayRequest, useCarDelayData} from './core/_hooks'
import {useState} from 'react'
import { getCarDelayData } from './core/_requests'

const CarDelayReports = () => {
  const validatioSchema = Yup.object().shape({
    productNo: Yup.string().required('شماره ساخت اجباری می باشد'),
  })

  const initialValues = {
    productNo: '',
  }

  const { data: auc } = useCarDelayData()
  console.log("auc", auc)

  // 111060557

  const formik = useFormik({
    initialValues,
    validationSchema: validatioSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      try {
        // const { data: carDelay } = await getCarDelayData(parseInt(values.productNo))
        // setData(carDelay)
        CarDelayRequest.mutate({prodNo: values.productNo})
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
      <form onSubmit={formik.handleSubmit}>
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
        </section>
      </form>
      <TablesWidget columns={CardDelayColumns} title='نتیجه گزارش' />
    </Card5>
  )
}

export default CarDelayReports
