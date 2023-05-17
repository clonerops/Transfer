import { useFormik } from 'formik'
import * as Yup from "yup" 
import Input from '../../../_cloner/helpers/components/Modules/Input'
import { Card5 } from '../../../_cloner/partials/content/cards/Card5'

const CarDelayReports = () => {

  const validatioSchema = Yup.object().shape({
    productNo: Yup.string()
      .required('شماره ساخت اجباری می باشد'),
  })
  
  const initialValues = {
    productNo: '',
  }
  

  const formik = useFormik({
    initialValues,
    validationSchema: validatioSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      try {

      } catch (error) {
        setStatus('اطلاعات ورود نادرست می باشد')
        setSubmitting(false)
      }
    },
  })



  return (
    <Card5 title='گزارش تاخیر خودرو' image='/media/svg/brand-logos/aven.svg'>
      <form >
        <Input
          type='text'
          search={true}
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.productNo}
          errors={formik.errors.productNo}
          name={'productNo'}
          title='شماره ساخت'
        ></Input>
      </form>
    </Card5>
  )
}

export default CarDelayReports
