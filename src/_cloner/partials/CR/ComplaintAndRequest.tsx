import {KTSVG} from '../../helpers'
import CheckboxAndLabel from '../../helpers/components/Modules/CheckboxAndLabel'
import InputAndLabel from '../../helpers/components/Modules/InputAndLabel'
import SelectAndLabel from '../../helpers/components/Modules/SelectAndLabel'
import TextareaAndInput from '../../helpers/components/Modules/TextareaAndInput'
import SaleServices from '../../helpers/components/SaleServices'
import {Card5} from '../content/cards/Card5'

const ComplaintAndRequest = () => {
  return (
    <Card5 title='ثبت اطلاعات شکایت' image='/media/svg/brand-logos/aven.svg'>
      <section className='grid grid-cols-2'>
        <form className='flex items-center'>
          <InputAndLabel title='کدینگ سطوح درخواست' />
          <button className='rounded-full bg-indigo-500 p-2 transition hover:bg-indigo-400'>
            <KTSVG
              path='/media/icons/duotune/general/gen021.svg'
              className='svg-icon-2 svg-icon-lg-0 translate-middle-y ms-0 text-white'
            />
          </button>
        </form>
      </section>

      {/* Incident */}
      <section className='grid grid-cols-2'>
        <section className='flex flex-col'>
          <SelectAndLabel title='قرارداد درخواست' />
        </section>
        <section className='flex flex-col'>
          <SelectAndLabel title='نوع درخواست' />
        </section>
        <section className='flex flex-col'>
          <SelectAndLabel title='گروه درخواست' />
        </section>
        <section className='flex flex-col'>
          <SelectAndLabel title='علت درخواست' />
        </section>
      </section>
      <section className='grid grid-cols-1'>
        <section className='flex flex-col'>
          <TextareaAndInput title='اظهارات مشتری' />
        </section>
        <section className='flex flex-col'>
          <TextareaAndInput title='درخواست مشتری' />
        </section>
        <section className='flex flex-col'>
          <CheckboxAndLabel title='آیا مشکل خودرو جزو ایرادات زیست محیطی بوده است؟' />
        </section>
      </section>
      <section className='grid grid-cols-1'>
        <section className='flex flex-col'>
          <SaleServices />
        </section>
      </section>

    </Card5>
  )
}

export default ComplaintAndRequest
