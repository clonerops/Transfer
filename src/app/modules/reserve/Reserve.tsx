import {useFormik} from 'formik'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import MainGrid from '../../../_cloner/helpers/components/MainGrid'
import SelectOption from '../../../_cloner/helpers/components/Modules/SelectOption'
import {
  useLandingLocation,
  useProvince,
} from '../../../_cloner/hooks/_hooks'
import {useState} from 'react'
import DatepickerComponent from '../../../_cloner/helpers/components/Modules/Datepicker'
import {IDate} from '../../../_cloner/model/date'
import {oneMonthLater, setDate} from '../../../_cloner/helpers/set-date'
import moment from 'moment-jalaali'
import { useGetCustomReserve, useGetReserve } from './core/_hooks'
import { ReserveGrid } from '../../../_cloner/helpers/grid-value/reserve-drivers'
import ConfirmReserve from './components/ConfirmReserve'

const Reserve = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [items, setItems] = useState<any>({
    id: 0,
  })

  const openModal = (items: any) => {
    setItems({
      id: items.id,
    })
    setIsOpen(true)
  }

  const initialValues = {
    AttendDateFrom: "",
    AttendDateTo: "",
    ProvinceId: 0,
    LadingLocId: 0,
  }

  const {data: provinces} = useProvince()
  const {data: landingLocations} = useLandingLocation()

  const [fromDate, setFromDate] = useState<IDate>({value: setDate().toString()})
  const [toDate, setToDate] = useState<IDate>({value: new Date().toString()})

  const { data: transports, refetch} = useGetCustomReserve()


  const {mutate, isLoading} = useGetReserve()

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      try {
        mutate(
          {
            AttendDateFrom: moment(fromDate.value).format('jYYYY/jMM/jDD'),
            AttendDateTo: moment(toDate.value).format('jYYYY/jMM/jDD'),
            ProvinceId: values.ProvinceId,
            LadingLocId: values.LadingLocId,
          },
          {
            onSuccess: (_) => {
              refetch()
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

  return (
    <Card5 title='نوبت دهی رانندگان' image='/media/svg/brand-logos/aven.svg'>
      <form onSubmit={formik.handleSubmit} className=''>
        <section className='grid grid-cols-4'>
          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.ProvinceId}
            errors={formik.errors.ProvinceId}
            name={'ProvinceId'}
            title='استان'
          >
            <option value=''>انتخاب کنید...</option>
            {provinces?.map((item: any) => {
              return <option value={item.prvN_NO}>{item.prvN_NAME}</option>
            })}
          </SelectOption>

          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.LadingLocId}
            errors={formik.errors.LadingLocId}
            name={'LadingLocId'}
            title='محل بارگیری'
          >
            <option value=''>انتخاب کنید...</option>
            {landingLocations?.map((item: any) => {
              return <option value={item.id}>{item.locationName}</option>
            })}
          </SelectOption>
          
          <DatepickerComponent
            getFieldProps={formik.getFieldProps}
            date={setFromDate}
            name={'AttendDateFrom'}
            title='از تاریخ'
            placeholder={moment(Date.now()).format("jYYYY/jMM/jDD")}
          />
          <DatepickerComponent
            getFieldProps={formik.getFieldProps}
            date={setToDate}
            name={'AttendDateTo'}
            title='تا تاریخ'
            placeholder={moment(oneMonthLater()).format("jYYYY/jMM/jDD")}
          />

        </section>
        <div className='flex items-end justify-end'>
          <ActionButton loading={isLoading} title='جستجو' />
        </div>
      </form>
      <section className='mt-8'>
        <span className='py-8 font-YekanBold text-xl'>نتیجه گزارش</span>
        <MainGrid data={transports} columnDefs={ReserveGrid(openModal)} />
      </section>
      <ConfirmReserve isOpen={isOpen} setIsOpen={setIsOpen} items={items} />
    </Card5>
  )
}
export default Reserve
