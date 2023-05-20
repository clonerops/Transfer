import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import MainGrid from '../../../_cloner/helpers/components/MainGrid'
import { useDrivers } from '../../../_cloner/hooks/_hooks'
import { DriverList } from '../../../_cloner/helpers/grid-value/driver-list'

const DriverListReport = () => {
  const { data : drivers} = useDrivers()

  return (
    <Card5 title='لیست رانندگان فعال' image='/media/svg/brand-logos/aven.svg'>
    
      <section className='mt-8'>
        <span className='py-8 font-VazirBold text-xl'>نتیجه گزارش</span>
        <MainGrid data={drivers} columnDefs={DriverList} />
      </section>
    </Card5>
  )
}

export default DriverListReport
