import { FC } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import Input from '../../../../_cloner/helpers/components/Modules/Input'
import ActionButton from '../../../../_cloner/helpers/components/Modules/ActionButton'
import {
  useCity,
  useContractors,
  useProvince,
  useShippingTypes,
} from '../../../../_cloner/hooks/_hooks'
import SelectOption from '../../../../_cloner/helpers/components/Modules/SelectOption'
import DatepickerComponent from '../../../../_cloner/helpers/components/Modules/Datepicker'
import {useState} from 'react'
import {setDate} from '../../../../_cloner/helpers/set-date'
import moment from 'moment-jalaali'
import {IDate} from '../../../../_cloner/model/date'
import gender from '../../../../_cloner/helpers/value-helper/gender.json'
import singleOrmarrid from '../../../../_cloner/helpers/value-helper/singleOrmarried.json'
import {usePlateList} from '../../../../_cloner/hooks/_hooks'
import {useCreateDriverRequest} from '../core/_hooks'
import {validDate} from '../../../../_cloner/helpers/valid-date'
import { DriverData } from '../core/_models'
// import * as moment from 'jalali-moment'


interface IProps {
  data: DriverData
  national: string
}

const SubmitDriver:FC<IProps> = ({data, national}) => {
  const nationalCodeSchema = Yup.object().shape({
    name: Yup.string().required('نام الزامی است'),
    family: Yup.string().required('نام خانوادگی الزامی است'),
    father: Yup.string().required('نام پدر الزامی است'),
    // bcNo: Yup.string().required('شماره شناسنامه الزامی است'),
    // bcSerial: Yup.string().required('سریال شناسنامه الزامی است'),
    bcPlaceProvince: Yup.string().required('استان صدور شناسنامه الزامی است'),
    bcPlace: Yup.string().required('شهر صدور شناسنامه الزامی است'),
    birthProvince: Yup.string().required('استان محل تولد الزامی است'),
    birthPlace: Yup.string().required('شهر محل تولد الزامی است'),
    mobileNo: Yup.string().required('شماره موبایل الزامی است'),
    telNo: Yup.string().required('تلفن ثابت الزامی است'),
    // zipCode: Yup.string().required('کد پستی الزامی است'),
    provinceNo: Yup.string().required('استان محل سکونت الزامی است'),
    cityNo: Yup.string().required('شهر محل سکونت الزامی است'),
    // district: Yup.string().required('منطقه شهرداری الزامی است'),
    // street: Yup.string().required('خیابان اصلی الزامی است'),
    // avenue: Yup.string().required('خیابان فرعی الزامی است'),
    // alley: Yup.string().required('کوچه الزامی است'),
    // plaque: Yup.string().required('پلاک الزامی است'),
    // fullAddress: Yup.string().required('آدرس کامل الزامی است'),
    plateType: Yup.string().required('نوع حمل الزامی است'),
    transferPlateId: Yup.string().required('پلاک خودروبر الزامی است'),
    contractor: Yup.string().required('پیمانکار حمل الزامی است'),
  })

  const [birthDate, setBirthDate] = useState<IDate>({value: new Date().toString()})
  
  const [cityone, setCityone] = useState(0)
  const [birthCityNo, setBirthCityNo] = useState(0)
  const [provinceNo, setProvinceNo] = useState(0)

  console.log(data)


  const initialValues = {
    name: data?.name ? data?.name : '',
    family: data?.family ? data?.family : '',
    father: data?.father ? data?.father : '',
    bcNo: data?.bcNo ? data?.bcNo : 111111,
    bcSerial: data?.bcSerial ? data?.bcSerial : 111111,
    bcPlaceProvince: data?.bcPlaceProvince ? data?.bcPlaceProvince : "",
    bcPlace: data?.bcPlace ? data?.bcPlace : "",
    birthProvince: data?.birthPlaceProvince ? data?.birthPlaceProvince : '',
    birthPlace: data?.birthPlace ? data?.birthPlace : '',
    mobileNo: data?.mobileNo ? data?.mobileNo : '',
    telNo: data?.telNo ? data?.telNo : '',
    gender: data?.gender ? data?.gender : 2,
    birthDate: data?.birthDate
      ? validDate(data?.birthDate)
      : moment(birthDate.value).format('jYYYY/jMM/jDD'),
    married: data?.married ? data?.married : 2,
    zipCode: data?.provinceNo ? data?.provinceNo : 1,
    provinceNo: data?.provinceNo ? data?.provinceNo : '',
    cityNo: data?.cityNo ? data?.cityNo : '',
    district: data?.addresses?.district ? data?.addresses?.district : 1,
    street: data?.addresses?.street ? data?.addresses?.street : 1,
    avenue: data?.addresses?.avenue ? data?.addresses?.avenue : 1,
    alley: data?.addresses?.alley ? data?.addresses?.alley : 1,
    plaque: data?.addresses?.plaque ? data?.addresses?.plaque : 1,
    fullAddress: data?.fullAddress ? data?.fullAddress : 2,
    plateType: data?.plateType ? data?.plateType : '',
    transferPlateId: data?.transferPlateId ? data?.transferPlateId : '',
    contractor: data?.contractorId ? data?.contractorId : '',
  }

  const handlePlaceProvinceChange = (event: any) => {
    formik.handleChange(event);
    setCityone(event.target.value)
  };

  const handleCityNoChange = (event: any) => {
    formik.handleChange(event);
    setBirthCityNo(event.target.value);
  };

  const handleProvinceChange = (event: any) => {
    formik.handleChange(event);
    setProvinceNo(event.target.value);
  };

  const {data: provinces} = useProvince()
  const {data: plateType} = useShippingTypes()
  const {data: plate} = usePlateList()
  const {data: contractors} = useContractors()
  const {data: bcPlaceCities} = useCity(cityone ? cityone : data?.bcPlaceProvince)
  const {data: birthCities} = useCity(
    birthCityNo ? birthCityNo : data?.birthPlaceProvince
  )
  const {data: cities} = useCity(provinceNo ? provinceNo : data?.provinceNo)

  const {mutate, data: driver} = useCreateDriverRequest()

  const formik = useFormik({
    validationSchema: nationalCodeSchema,
    enableReinitialize: true,
    initialValues,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      const create = {
        createDriverRequest: {
          custNo: 0,
          nationalCode: national ? national : data?.nationalCode,
          nationalId: national ? national : data?.nationalCode,
          name: values.name ? values.name : data?.name,
          family: values.family ? values.family : data?.family,
          father: values.father ? values.father : data?.father,
          bcNo: values.bcNo ? values.bcNo : data?.bcNo,
          bcSerial: values.bcSerial ? values.bcSerial : data?.bcSerial,
          bcPlaceProvince: values.bcPlaceProvince
            ? Number(values.bcPlaceProvince)
            : data?.bcPlaceProvince,
          bcPlace: values.bcPlace ? Number(values.bcPlace) : data?.bcPlace,
          birthDate: moment(birthDate.value).format('jYYYY/jMM/jDD')
            ? moment(birthDate.value).format('jYYYY/jMM/jDD')
            : validDate(data?.birthDate),
          birthPlaceProvince: values.birthProvince
            ? Number(values.birthProvince)
            : data?.birthPlaceProvince,
          birthPlace: values.birthPlace ? Number(values.birthPlace) : data?.birthPlace,
          mobileNo: values.mobileNo ? values.mobileNo : data?.mobileNo,
          telNo: values.telNo ? values.telNo : data?.telNo,
          gender: values.gender ? values.gender : data?.gender,
          married: values.married ? values.married : data?.married,
          jobId: 0,
          diplomaId: 0,
          economicCode: '',
          introLetter: '',
          email: null,
          income: 0,
          addresses: [
            {
              fullAddress: values.fullAddress ? values.fullAddress : data?.addresses?.fullAddress,
              custNo: 0,
              addressType: 0,
              provinceNo: values.provinceNo ? values.provinceNo : data?.provinceNo,
              cityNo: values.cityNo ? values.cityNo : data?.cityNo,
              zipCode: values.zipCode ? values.zipCode : data?.addresses?.zipCode,
              district: values.district ? values.district : data?.addresses?.district,
              street: values.street ? values.street : data?.addresses?.street,
              avenue: values.avenue ? values.avenue : data?.addresses?.avenue,
              alley: values.alley ? values.alley : data?.addresses?.alley,
              plaque: values.plaque ? values.plaque : data?.addresses?.plaque,
              postBox: '',
              cityName: 'تهران',
            },
          ],
          plateType: values.plateType ? values.plateType : data?.plateType,
          transferPlateId: values.transferPlateId
            ? values.transferPlateId
            : data?.transferPlateId,
          contractorId: values.contractor ? values.contractor : data?.contractorId,
        },
      }
      try {
        mutate(
          {
            ...create,
          },
          {
            onSuccess: () => {
              if (data) {
                alert('ویرایش کاربر موفقیت آمیز انجام گردید')
              } else {
                alert('ایجاد کاربر موفقیت آمیز انجام گردید')
              }
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
    <form onSubmit={formik.handleSubmit} className=''>
      <div className='grid grid-cols-4 gap-8'>
        <Input
          type='text'
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.name}
          errors={formik.errors.name}
          id={'name'}
          name={'name'}
          value={formik.values.name}
          onChange={formik.handleChange}
          title='نام'
        ></Input>
        <Input
          type='text'
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.family}
          errors={formik.errors.family}
          value={formik.values.family}
          onChange={formik.handleChange}
          name={'family'}
          title='نام خانوادگی'
        ></Input>
        <Input
          type='text'
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.father}
          errors={formik.errors.father}
          value={formik.values.father}
          onChange={formik.handleChange}
          name={'father'}
          title='نام پدر'
        ></Input>
        <Input
          type='number'
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.bcNo}
          errors={formik.errors.bcNo}
          name={'bcNo'}
          defaultValue={formik.values.bcNo}
          value={formik.values.bcNo}
          onChange={formik.handleChange}
          disabled={data}
          title='شماره شناسنامه'
        ></Input>
      </div>
      <div className='grid grid-cols-4 gap-8'>
        <Input
          type='number'
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.bcSerial}
          errors={formik.errors.bcSerial}
          name={'bcSerial'}
          defaultValue={111111}
          value={formik.values.bcSerial}
          onChange={formik.handleChange}
          disabled={data}
          title='سریال شناسنامه'
        ></Input>
        <SelectOption
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.bcPlaceProvince}
          errors={formik.errors.bcPlaceProvince}
          defaultValue={formik.values.bcPlaceProvince}
          onChange = {handlePlaceProvinceChange}
          value={formik.values.bcPlaceProvince}
          isCreate={true}
          disabled={data}
          name={'bcPlaceProvince'}
          id={'bcPlaceProvince'}
          title='استان صدور شناسنامه'
        >
          <option value=''>انتخاب کنید...</option>
          {provinces?.map((item: any) => {
            return <option value={item.prvN_NO}>{item.prvN_NAME}</option>
          })}
        </SelectOption>
        <SelectOption
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.bcPlace}
          errors={formik.errors.bcPlace}
          name={'bcPlace'}
          disabled={data}
          defaultValue={formik.values.bcPlace}
          title='شهر صدور شناسنامه'
        >
          <option value='Active'>انتخاب کنید...</option>
          {bcPlaceCities?.map((item: any) => {
            return <option value={item.citY_NO}>{item.citY_NAME}</option>
          })}
        </SelectOption>
        <DatepickerComponent
          getFieldProps={formik.getFieldProps}
          date={setBirthDate}
          name={'birthDate'}
          // defaultValue={formik.values.birthDate}
          title='تاریخ تولد'
          placeholder={formik.values.birthDate}
        />
      </div>
      <div className='grid grid-cols-4 gap-8'>
        <SelectOption
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.birthProvince}
          errors={formik.errors.birthProvince}
          defaultValue={formik.values.birthProvince}
          onChange = {handleCityNoChange}
          value={formik.values.birthProvince}
          isCreate={true}
          name={'birthProvince'}
          title='استان محل تولد'
        >
          <option value='Active'>انتخاب کنید...</option>
          {provinces?.map((item: any) => {
            return <option value={item.prvN_NO}>{item.prvN_NAME}</option>
          })}
        </SelectOption>
        <SelectOption
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.birthPlace}
          errors={formik.errors.birthPlace}
          defaultValue={formik.values.birthPlace}
          name={'birthPlace'}
          title='شهر محل تولد'
        >
          <option value='Active'>انتخاب کنید...</option>
          {birthCities?.map((item: any) => {
            return <option value={item.citY_NO}>{item.citY_NAME}</option>
          })}
        </SelectOption>
        <SelectOption
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.gender}
          errors={formik.errors.gender}
          value={formik.values.gender}
          onChange={formik.handleChange}
          name={'gender'}
          title='جنسیت'
        >
          <option value='Active'>انتخاب کنید...</option>
          {gender.gender?.map((item: any) => {
            return <option value={item.id}>{item.value}</option>
          })}
        </SelectOption>
        <SelectOption
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.married}
          errors={formik.errors.married}
          value={formik.values.married}
          onChange={formik.handleChange}
          name={'married'}
          title='وضعیت تاهل'
        >
          <option value='Active'>انتخاب کنید...</option>
          {singleOrmarrid.singleormarried?.map((item: any) => {
            return <option value={item.id}>{item.value}</option>
          })}
        </SelectOption>
      </div>
      <div className='grid grid-cols-4 gap-8'>
        <Input
          type='text'
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.telNo}
          errors={formik.errors.telNo}
          value={formik.values.telNo}
          onChange={formik.handleChange}
          name={'telNo'}
          title='تلفن ثابت'
        ></Input>
        <Input
          type='text'
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.mobileNo}
          errors={formik.errors.mobileNo}
          value={formik.values.mobileNo}
          onChange={formik.handleChange}
          name={'mobileNo'}
          title='تلفن همراه'
        ></Input>

        <SelectOption
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.provinceNo}
          errors={formik.errors.provinceNo}
          onChange = {handleProvinceChange}
          value={formik.values.provinceNo}
          isCreate={true}
          name={'provinceNo'}
          title='استان محل سکونت'
        >
          <option value='Active'>انتخاب کنید...</option>
          {provinces?.map((item: any) => {
            return <option value={item.prvN_NO}>{item.prvN_NAME}</option>
          })}
        </SelectOption>
        <SelectOption
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.cityNo}
          errors={formik.errors.cityNo}
          defaultValue={formik.values.cityNo}
          name={'cityNo'}
          title='شهر محل سکونت'
        >
          <option value=''>انتخاب کنید...</option>
          {cities?.map((item: any) => {
            return <option value={item.citY_NO}>{item.citY_NAME}</option>
          })}
        </SelectOption>
      </div>
      <div className='grid grid-cols-4 gap-8'>
        <Input
          type='text'
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.zipCode}
          errors={formik.errors.zipCode}
          value={formik.values.zipCode}
          onChange={formik.handleChange}
          disabled={data}
          name={'zipCode'}
          title='کدپستی'
        ></Input>
        <Input
          type='text'
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.district}
          errors={formik.errors.district}
          value={formik.values.district}
          onChange={formik.handleChange}
          disabled={data}
          name={'district'}
          title='منطقه شهرداری'
        ></Input>
        <Input
          type='text'
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.street}
          errors={formik.errors.street}
          value={formik.values.street}
          onChange={formik.handleChange}
          disabled={data}
          name={'street'}
          title='خیابان اصلی'
        ></Input>
        <Input
          type='text'
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.avenue}
          errors={formik.errors.avenue}
          value={formik.values.avenue}
          onChange={formik.handleChange}
          disabled={data}
          name={'avenue'}
          title='خیابان فرعی'
        ></Input>
      </div>
      <div className='grid grid-cols-4 gap-8'>
        <Input
          type='text'
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.alley}
          errors={formik.errors.alley}
          value={formik.values.alley}
          onChange={formik.handleChange}
          disabled={data}
          name={'alley'}
          title='کوچه'
        ></Input>
        <Input
          type='text'
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.plaque}
          errors={formik.errors.plaque}
          value={formik.values.plaque}
          onChange={formik.handleChange}
          disabled={data}
          name={'plaque'}
          title='پلاک'
        ></Input>
        <section className='col-span-2'>
          <Input
            type='text'
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.fullAddress}
            errors={formik.errors.fullAddress}
            value={formik.values.fullAddress}
            onChange={formik.handleChange}
            name={'fullAddress'}
            title='آدرس'
          ></Input>
        </section>
      </div>
      <div className='grid grid-cols-3 gap-8'>
        <SelectOption
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.plateType}
          errors={formik.errors.plateType}
          defaultValue={formik.values.plateType}
          name={'plateType'}
          title='نوع حمل'
        >
          <option value=''>انتخاب کنید...</option>
          {plateType?.map((item: any) => {
            return <option value={item.id}>{item.description}</option>
          })}
        </SelectOption>
        <SelectOption
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.transferPlateId}
          errors={formik.errors.transferPlateId}
          defaultValue={formik.values.transferPlateId}
          name={'transferPlateId'}
          title='پلاک انتظامی'
        >
          <option value=''>انتخاب کنید...</option>
          {plate?.map((item: any) => {
            return <option value={item.id}>{item.platE_NO}</option>
          })}
        </SelectOption>
        <SelectOption
          getFieldProps={formik.getFieldProps}
          touched={formik.touched.contractor}
          errors={formik.errors.contractor}
          defaultValue={formik.values.contractor}
          name={'contractor'}
          title='پیمانکار حمل'
        >
          <option value=''>انتخاب کنید...</option>
          {contractors?.result?.map((item: any) => {
            return <option value={item.p_ID}>{item.p_NAME}</option>
          })}
        </SelectOption>
      </div>
      <div className='flex items-end justify-end'>
        <ActionButton title='ثبت اطلاعات' />
      </div>
    </form>
  )
}

export default SubmitDriver
