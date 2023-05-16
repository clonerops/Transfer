/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { loginUser } from '../core/_requests'
import { useAuth } from '../core/Auth'
import { useGetCaptcha } from '../core/_hooks'
import Captcha from '../../../../_cloner/helpers/components/Captcha'
import Input from '../../../../_cloner/helpers/components/Modules/Input'

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'تعداد کاراکتر کمتر از 3 مجاز نمی باشد')
    .max(50, 'تعداد کاراکتر بیشتر از 50 مجاز نمی باشد')
    .required('نام کاربری الزامی است'),
  password: Yup.string()
    .min(3, 'تعداد کاراکتر کمتر از 3 مجاز نمی باشد')
    .max(50, 'تعداد کاراکتر بیشتر از 50 مجاز نمی باشد')
    .required('رمز عبور الزامی است'),
  captcha: Yup.string()
    .required('کدامنیتی الزامی است'),
})

const initialValues = {
  username: '',
  password: '',
  captcha: '',
}

export function Login() {
  const [loading, setLoading] = useState<boolean>(false)
  const { saveAuth, setCurrentUser } = useAuth()
  const { data: captcha, refetch } = useGetCaptcha()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true)
      try {
        const {data: auth} = await loginUser(values.username, values.password, captcha.tokenString, values.captcha)
        saveAuth(auth)
        setCurrentUser(auth)

      } catch (error) {
        saveAuth(undefined)
        setStatus('اطلاعات ورود نادرست می باشد')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-11'>
        <h1 className='text-dark text-3xl fw-bolder mb-3'>ورود</h1>
        <div className='text-gray-500 fw-semibold fs-6'>سامانه مدیریت حمل و نقل و ردیابی محصول </div>
      </div>
      {/* begin::Heading */}

      {/* begin::Separator */}
      <div className='separator separator-content my-14'>
        <span className='w-150px text-gray-500 fw-semibold fs-7'>ورود با حساب کاربری</span>
      </div>
      {/* end::Separator */}

      {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>
            برای ورود ار نام کاربری و رمز عبور سیستم فروش خود استفاده کنید
          </div>
        </div>
      )}

      {/* begin::Form group */}
      <Input type="text" login={true} getFieldProps={formik.getFieldProps} touched={formik.touched.username} errors={formik.errors.username} name={"username"} title="نام کاربری"></Input>
      {/* end::Form group */}

      {/* begin::Form group */}
      <Input type="password" login={true} getFieldProps={formik.getFieldProps} touched={formik.touched.password} errors={formik.errors.password} name={"password"} title="کلمه عبور"></Input>
     
      <Captcha captcha={captcha?.image} refetch={refetch} />
      <Input type="text" login={true} getFieldProps={formik.getFieldProps} touched={formik.touched.captcha} errors={formik.errors.captcha} name={"captcha"} title="کد امنیتی"></Input>
      {/* begin::Action */}
      <div className='d-grid mb-10'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-primary'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>ادامه</span>}
          {loading && (
            <span className='indicator-progress' style={{ display: 'block' }}>
              درحال پردازش...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}
    </form>
  )
}
