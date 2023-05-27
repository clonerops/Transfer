import { useState, useRef } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import Input from '../../../_cloner/helpers/components/Modules/Input'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import SubmitDriver from './components/SubmitDriver'
import { useDriverDataRequest } from './core/_hooks'

const DriversAction = () => {

  const [national, setNational] = useState("")

  const nationalCodeSchema = Yup.object().shape({
    nationalId: Yup.string().required('کدملی الزامی است'),
  })
  const { mutate, data: informations } = useDriverDataRequest()

  const initialValues = {
    nationalId: '',
  }


  const formik = useFormik({
    validationSchema: nationalCodeSchema,
    initialValues,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      try {
        mutate(
            {
                nationalId: values.nationalId
            },
            {
              onSuccess: () => {

              },
            }
          )
        setSubmitting(false)
      } catch (error) {
        setStatus('اطلاعات ورود نادرست می باشد')
        setSubmitting(false)
      }
    },
  })

  const handleMyFieldChange = (event: any) => {
    formik.handleChange(event);
    setNational(event.target.value);
  };

console.log("informations",informations)

  return (
    <Card5 title='دریافت و ثبت مشخصات راننده جدید' image='/media/svg/brand-logos/aven.svg'>
      <form onSubmit={formik.handleSubmit} className='w-50'>
        <Input
          type='number'
          search={true}
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.nationalId}
          errors={formik.errors.nationalId}
          onChange = {handleMyFieldChange}
          value={formik.values.nationalId}
          name={'nationalId'}
          title='کدملی'
        ></Input>
        <div className='flex items-end justify-end'>
          <ActionButton title='جستجو' />
        </div>
      </form>
      <section className='py-16'>
        <SubmitDriver data={informations} national={national} />
      </section>
    </Card5>
  )
}

export default DriversAction
