import {useState} from 'react'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import MainGrid from '../../../_cloner/helpers/components/MainGrid'
import { useFetchNews} from './core/_hooks'
import Button from '../../../_cloner/helpers/components/Modules/Button'
import CreateNews from './components/CreateNews'
import EditNews from './components/EditNews'
import { NewsGrid } from '../../../_cloner/helpers/grid-value/news'

const NewsContent = () => {
  const [items, setItems] = useState({
    id: 0,
    Title: '',
    Content: '',
    STATUS: 0,
    Type: 0,
    UserId: 0,
    Image: '',
  })

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCreate, setIsOpenCreate] = useState(false)

  const openCreateModal = () => setIsOpenCreate(true)

  const openModal = (items) => {
    setItems({
      id: items.id,
      Title: items.Title,
      Content: items.Content,
      STATUS: items.STATUS,
      Type: items.Type,
      UserId: items.UserId,
      Image: items.Image,
    })
    setIsOpen(true)
  }

  const {data: news} = useFetchNews()

  return (
    <>
      <Card5 title='اخبار' image='/media/svg/brand-logos/aven.svg'>
        <Button onClick={openCreateModal} title='ایجاد خبر' />
        <MainGrid data={news} columnDefs={NewsGrid(openModal)} />
      </Card5>
      <CreateNews isOpen={isOpenCreate} setIsOpen={setIsOpenCreate} />
      <EditNews isOpen={isOpen} setIsOpen={setIsOpen} items={items} />
    </>
  )
}

export default NewsContent
