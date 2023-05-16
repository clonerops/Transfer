import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import InputAndLabel from '../../../_cloner/helpers/components/Modules/InputAndLabel'
import SelectAndLabel from '../../../_cloner/helpers/components/Modules/SelectAndLabel'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'

const ConnectToCallCenter = () => {
  return (
    <Card5 image='/media/svg/brand-logos/aven.svg' title='اتصال به مرکز تماس مشتریان'>
      <form className='container grid grid-cols-2'>
        <section className='flex flex-col'>
          <InputAndLabel title='نام کاربری' />
        </section>
        <section className='flex flex-col'>
          <InputAndLabel title='کلمه عبور' />
        </section>
        <section className='flex flex-col'>
          <InputAndLabel title='شماره دستگاه' />
        </section>
        <section className='flex flex-col'>
          <SelectAndLabel title='شماره گروه' />
        </section>
        <section className='flex flex-col'>
          <SelectAndLabel title='نوع اتصال' />
        </section>
        <section className='flex flex-col' />
        <section className='flex flex-col' />
        <section className='flex flex-col'>
          <ActionButton title='تایید' />
        </section>
      </form>
    </Card5>
  )
}

export default ConnectToCallCenter
