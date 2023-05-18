import {useFormik} from 'formik'
import * as Yup from 'yup'
import Input from '../../../_cloner/helpers/components/Modules/Input'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import {TablesWidget} from '../../../_cloner/helpers/components/TablesWidget'
import CardDelayColumns from '../../../_cloner/fakedata/cardelarcolumns.json'
import { useDelayRequest} from './core/_hooks'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import MainGrid from '../../../_cloner/helpers/components/MainGrid'
import { useState } from 'react'

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

  const coulDef = [
    {
        field: "billlandingid",
        headerName: 'بارنامه',
        cellStyle: { 'white-space': 'normal', 'font-size': '12px', 'font-weight': 'bold' },
        maxWidth: 100,
        headerClass: 'bg-indigo-600'
    },
    {
        field: "prod_no",
        headerName: 'شماره ساخت',
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        minWidth: 120,
        headerClass: 'bg-indigo-600'
    },
    {
        field: "dealerName",
        headerName: 'نمایندگی',
        minWidth: 260,
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        headerClass: 'bg-indigo-600'
    },
    {
        field: "driveR_NAME",
        headerName: 'راننده',
        minWidth: 200,
        cellRenderer: (params: { data: { driveR_NAME: string } }) => params.data.driveR_NAME === "" ? <span>..............</span> : params.data.driveR_NAME,
        cellStyle: { 'color': '#FFF' },
        autoHeight: true,
        headerClass: 'bg-indigo-600'
    },
    {
        field: "originDesc",
        headerName: 'مبدا',
        minWidth: 200,
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        headerClass: 'bg-indigo-600'
    },
    {
        field: "destinationDesc",
        headerName: 'مقصد',
        minWidth: 200,
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        headerClass: 'bg-indigo-600'
    },
    {
        field: "contractorDlvrDate",
        headerName: 'تاریخ تحویل به پیمانکار',
        minWidth: 200,
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        headerClass: 'bg-indigo-600'
    },
    {
        field: "intervalTimeLong",
        headerName: 'زمان مطابق برنامه',
        minWidth: 160,
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        headerClass: 'bg-indigo-600'
    },
    {
        field: "transferTimeLong_str",
        headerName: 'زمان طی شده',
        minWidth: 260,
        cellStyle: { 'white-space': 'normal', 'font-size': '12px' },
        autoHeight: true,
        headerClass: 'bg-indigo-600'
    },

]

console.log("CardDelayColumns", CardDelayColumns)

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
      <MainGrid data={carDelayData} columnDefs={coulDef} />
      {/* <TablesWidget loading={isLoading} columns={CardDelayColumns} delayData={carDelayData} delay={true} title='نتیجه گزارش' /> */}
    </Card5>
  )
}

export default CarDelayReports
