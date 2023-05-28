import {useState} from 'react'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import MainGrid from '../../../_cloner/helpers/components/MainGrid'
import {useFetchFaq} from './core/_hooks'
import {Faq} from './core/_models'
import Button from '../../../_cloner/helpers/components/Modules/Button'
import { FaqGrid } from '../../../_cloner/helpers/grid-value/faq'
import EditFaq from './components/EditFaq'
import CreateFaq from './components/CreateFaq'

const FaqContent = () => {
  const [items, setItems] = useState<Faq>({
    id: 0,
    question: '',
    answer: '',
  })

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCreate, setIsOpenCreate] = useState(false)

  const openCreateModal = () => setIsOpenCreate(true)

  const openModal = (items: Faq) => {
    setItems({
      id: items.id,
      question: items.question,
      answer: items.answer,
    })
    setIsOpen(true)
  }

  const {data: faq} = useFetchFaq()

  return (
    <>
      <Card5 title='پرسش و پاسخ' image='/media/svg/brand-logos/aven.svg'>
        <Button onClick={openCreateModal} title='ایجاد پرسش و پاسخ' />
        <MainGrid data={faq} columnDefs={FaqGrid(openModal)} />
      </Card5>
      <CreateFaq isOpen={isOpenCreate} setIsOpen={setIsOpenCreate} />
      <EditFaq isOpen={isOpen} setIsOpen={setIsOpen} items={items} />
    </>
  )
}

export default FaqContent
