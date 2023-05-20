import {useFormik} from 'formik'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import {useBillandingChartRequest, useCarChartRequest} from './core/_hooks'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import SelectOption from '../../../_cloner/helpers/components/Modules/SelectOption'
import {useContractors} from '../../../_cloner/hooks/_hooks'
import {Chart} from '../../../_cloner/helpers/components/Chart'
import DatepickerComponent from '../../../_cloner/helpers/components/Modules/Datepicker'
import {useState} from 'react'
import moment from 'moment-jalaali'
import {IDate} from '../../../_cloner/model/date'
import { setDate } from '../../../_cloner/helpers/set-date'

const CarChartReport = () => {

  const initialValues = {
    contr_id: 0,
  }

  const [fromDate, setFromDate] = useState<IDate>({value: setDate().toString()})
  const [toDate, setToDate] = useState<IDate>({value: new Date().toString()})

  const {data: contractors} = useContractors()

  const {mutate, data: charts, isLoading} = useCarChartRequest()

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      try {
        mutate(
          {
            fromDate: moment(fromDate.value).format('jYYYY/jMM/jDD'),
            toDate: moment(toDate.value).format('jYYYY/jMM/jDD'),
            contr_id: values.contr_id,
          },
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

  console.log("charts", charts)

  return (
    <Card5 title='گزارش آماری خودروها' image='/media/svg/brand-logos/aven.svg'>
      <form onSubmit={formik.handleSubmit} className='grid grid-cols-3'>
        <section>
          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.contr_id}
            errors={formik.errors.contr_id}
            name={'contr_id'}
            title='پیمانکاران'
          >
            <option value='Active'>انتخاب کنید...</option>
            {contractors?.result?.map((item: any) => {
              return <option value={item.p_ID}>{item.p_NAME}</option>
            })}
          </SelectOption>
        </section>
        <DatepickerComponent
          getFieldProps={formik.getFieldProps}
          date={setFromDate}
          name={'fromDate'}
          title='از تاریخ'
          placeholder={moment(fromDate.value).format('jYYYY/jMM/jDD')}
        />
        <DatepickerComponent
          getFieldProps={formik.getFieldProps}
          date={setToDate}
          name={'toDate'}
          title='تا تاریخ'
          placeholder={moment(toDate.value).format('jYYYY/jMM/jDD')}
        />
        <section />
        <section />
        <div className='flex items-end justify-end self-end'>
          <ActionButton loading={isLoading} title='جستجو' />
        </div>
      </form>
      <section className='mt-8'>
        <span className='py-8 font-VazirBold text-xl'>نتیجه گزارش</span>
        <Chart label='' data={charts} />
      </section>
    </Card5>
  )
}

export default CarChartReport
