// import {useIntl} from 'react-intl'
import {MenuItem} from './MenuItem'
// import {MenuInnerWithSub} from './MenuInnerWithSub'
// import {MegaMenu} from './MegaMenu'

export function MenuInner() {
  // const intl = useIntl()
  return (
    <>
      <MenuItem title='کارتابل' to='/dashboard' />
      <MenuItem title='کارتابل گروهی' to='/dashboard' />
      <MenuItem title='امکانات' to='/dashboard' />
      <MenuItem title='مرکز مشتریان' to='/dashboard' />
      <MenuItem title='شرکت های زیر مجموعه' to='/dashboard' />
    </>
  )
}
