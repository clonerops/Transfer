import {useState} from 'react'
// import Dialog from '../../../_cloner/helpers/components/Dialog'
import Modal from '../../../_cloner/helpers/components/Modal'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import InputAndLabel from '../../../_cloner/helpers/components/Modules/InputAndLabel'
import SelectAndLabel from '../../../_cloner/helpers/components/Modules/SelectAndLabel'
// import TextareaAndInput from '../../../_cloner/helpers/components/Modules/TextareaAndInput'
import {TablesWidget} from '../../../_cloner/helpers/components/TablesWidget'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import initialValue from '../../../_cloner/helpers/value-helper/customer-registration.json'
// import Guidance from '../../../_cloner/partials/guidance/Guidance'
import ComplaintAndRequest from '../../../_cloner/partials/CR/ComplaintAndRequest'
import CustomerCallHistory from '../../../_cloner/fakedata/customerhistorycall.json'
const CustomerCallRegistration = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  // Handle Value From Inputs
  const [values, setValues] = useState(initialValue)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const SearchCustomer = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault()
    console.log(values.nationalcode)
    // setShowModal(true)
  }

  return (
    <>
      <Card5 title='جستجوی مشتری' image='/media/svg/brand-logos/aven.svg'>
        {/* Customer Call Number */}
        <section className='grid grid-cols-2 md:grid-cols-3'>
          <InputAndLabel title='شماره تماس گیرنده' disable />
          <SelectAndLabel title='موضوع تماس' />
        </section>
        {/* Call Registration Action Begin */}
        <form
          className='grid w-full grid-cols-2 md:grid-cols-3'
          onSubmit={(e) => SearchCustomer(e)}
        >
          <section className='flex flex-col'>
            <InputAndLabel
              name='nationalcode'
              title='کدملی'
              valueData={values.nationalcode}
              onChangeData={handleChange}
            />
          </section>
          <section className='flex flex-col'>
            <InputAndLabel title='شماره پذیرش' />
          </section>
          <section className='flex flex-col'>
            <InputAndLabel title='شماره شاسی' />
          </section>
          <section className='flex flex-col' />
          <section className='flex flex-col' />
          <section className='flex flex-col'>
            <ActionButton title='جستجو' />
          </section>
        </form>
        {/* Call Registration Action End */}
      </Card5>
      {/* Customer Information Begin */}
      <div className='row g-6 g-xl-2 mt-5'>
        <div className='col-sm-6 col-xl-4'>
          <Card5 image='/media/svg/brand-logos/aven.svg' title='اطلاعات مشتری'>
            <form className='container grid grid-cols-1'>
              <section className='flex flex-col'>
                <InputAndLabel title='نام' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='نام خانوادگی' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='کدملی' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='استان' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='شهر' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='تلفن ثابت' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='تلفن همراه' />
              </section>
            </form>
          </Card5>
        </div>
        <div className='col-sm-6 col-xl-8'>
          <Card5 image='/media/svg/brand-logos/twitch.svg' title='اطلاعات خودرو'>
            <form className='container grid grid-cols-1 md:grid-cols-2'>
              <section className='flex flex-col justify-between'>
                <InputAndLabel title='شماره شاسی' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='شماره موتور' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='شماره پذیرش' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='نوع خودرو' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='مدل خودرو' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='رنگ خودرو' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='کیلومتر' required />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='شرکت سازنده' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='تاریخ شروع گارانتی' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='بسته خدمت' />
              </section>
              <section className='flex flex-col' />
              <section className='flex flex-col'>
                <ActionButton title='جستجو' />
              </section>
            </form>
          </Card5>
        </div>
      </div>
      <section className='mt-5'>
        <TablesWidget columns={CustomerCallHistory} title='سوابق تماس مشتری' />
      </section>
      {/* submit Guidence Information Begin */}
      <section className='mt-5'>
        {/* <Guidance /> */}
        <ComplaintAndRequest />
      </section>
      {/* submit Guidence Information End */}

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TablesWidget title='خودروها' />
      </Modal>
    </>
  )
}

export default CustomerCallRegistration
