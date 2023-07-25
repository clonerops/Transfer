import {useFormik} from 'formik'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import { useTemporaryStatusRequest} from './core/_hooks'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import MainGrid from '../../../_cloner/helpers/components/MainGrid'
import SelectOption from '../../../_cloner/helpers/components/Modules/SelectOption'
import {
  useBillandingStatus,
  useContractors,
  useDealers,
  useDrivers,
  useParkings,
} from '../../../_cloner/hooks/_hooks'
import {useState} from 'react'
import DatepickerComponent from '../../../_cloner/helpers/components/Modules/Datepicker'
import {IDate} from '../../../_cloner/model/date'
import {setDate} from '../../../_cloner/helpers/set-date'
import moment from 'moment-jalaali'
import { TemporaryStatus } from '../../../_cloner/helpers/grid-value/temporary-status'

const TemporaryStatusReport = () => {
  const initialValues = {
    contId: 0,
    driverId: 0,
    originId: 0,
    destId: 0,
    dealerId: 0
  }

  const {data: contractors} = useContractors()
  const {data: drivers} = useDrivers()
  const {data: parkings} = useParkings()
  const {data: blStatus} = useBillandingStatus()
  const {data: dealers} = useDealers()

  const [statusId, setStatusId] = useState([])
  const [fromDate, setFromDate] = useState<IDate>({value: setDate().toString()})
  const [toDate, setToDate] = useState<IDate>({value: new Date().toString()})
  const getStatusId = (selectedOption:any) => setStatusId(selectedOption)

  const {mutate, data: temporaryStatus, isLoading} = useTemporaryStatusRequest()

  // const outputFilename = `LotteryValidApplicants${Date.now()}.csv`
  // DownloadExcelFile(data, outputFilename)

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      try {
        mutate(
          {
            fromDate: moment(fromDate.value).format('jYYYY/jMM/jDD'),
            toDate: moment(toDate.value).format('jYYYY/jMM/jDD'),
            contId: values.contId,
            driverId: values.driverId,
            originId: values.originId,
            destId: values.destId,
            recDealerId: values.dealerId,
            StatusId: statusId?.map((item: any) => item.value)
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

  return (
    <Card5 title='گزارش خودروهای بارنامه شده' image='/media/svg/brand-logos/aven.svg'>
      <form onSubmit={formik.handleSubmit} className=''>
        <section className='grid grid-cols-3'>
          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.contId}
            errors={formik.errors.contId}
            name={'contId'}
            title='پیمانکاران'
          >
            <option value=''>انتخاب کنید...</option>
            {contractors?.result?.map((item: any) => {
              return <option value={item.p_ID}>{item.p_NAME}</option>
            })}
          </SelectOption>

          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.driverId}
            errors={formik.errors.driverId}
            name={'driverId'}
            title='رانندگان'
          >
            <option value=''>انتخاب کنید...</option>
            {drivers?.map((item: any) => {
              return <option value={item.driverID}>{item.driverName}</option>
            })}
          </SelectOption>
          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.dealerId}
            errors={formik.errors.dealerId}
            name={'dealerId'}
            title='نمایندگی'
          >
            <option value=''>انتخاب کنید...</option>
            {dealers?.map((item: any) => {
              return <option value={item.dlR_NO}>{item.dlR_NAME}</option>
            })}
          </SelectOption>
        </section>
        <section className='grid grid-cols-3'>
          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.originId}
            errors={formik.errors.originId}
            name={'originId'}
            title='مبدا'
          >
            <option value=''>انتخاب کنید...</option>
            {parkings?.result?.map((item: any) => {
              return <option value={item.loC_CODE}>{item.loC_NAME}</option>
            })}
          </SelectOption>

          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.destId}
            errors={formik.errors.destId}
            name={'destId'}
            title='مقصد'
          >
            <option value=''>انتخاب کنید...</option>
            {parkings?.result?.map((item: any) => {
              return <option value={item.loC_CODE}>{item.loC_NAME}</option>
            })}
          </SelectOption>
          
          <SelectOption
            isMulti={true}
            onChange={getStatusId}
            value={statusId}
            placeholder='انتخاب کنید.'
            multiple={true}
            name={'StatusId'}
            title='وضعیت'
            options={blStatus?.map((item: any) => ({
              value: item.id,
              label: item.description,
            }))}
          />
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

        </section>
        <div className='flex items-end justify-end'>
          <ActionButton loading={isLoading} title='جستجو' />
        </div>
      </form>
      <section className='mt-8'>
        <span className='py-8 font-YekanBold text-xl'>نتیجه گزارش</span>
        <MainGrid data={temporaryStatus} columnDefs={TemporaryStatus} />
      </section>
    </Card5>
  )
}

export default TemporaryStatusReport
