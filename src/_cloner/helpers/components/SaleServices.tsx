import { Card5 } from "../../partials/content/cards/Card5"
import ActionButton from "./Modules/ActionButton"
import InputAndLabel from "./Modules/InputAndLabel"
import SelectAndLabel from "./Modules/SelectAndLabel"
import { TablesWidget } from "./TablesWidget"
import pieceInformation from '../../fakedata/piece.json'

const SaleServices = () => {
  return (
    <Card5 title='خدمات پس از فروش' image='/media/svg/brand-logos/aven.svg'>
        <form className='grid grid-cols-3'>
            <section className="flex flex-col">
                <InputAndLabel title="شماره درخواست" />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="شماره پذیرش" />
            </section>
            <section className="flex flex-col">
                <SelectAndLabel title="وضعیت خودرو" />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="شماره شاسی" />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="شماره موتور" />
            </section>
            <section className="flex flex-col">
                <ActionButton title="جستجو" />
            </section>
        </form>
        <section>
            <TablesWidget columns={pieceInformation} title="" />
        </section>
    </Card5>
  )
}

export default SaleServices