import {useState} from 'react'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import {StaticLinks} from '../../../_cloner/helpers/grid-value/static-links'
import MainGrid from '../../../_cloner/helpers/components/MainGrid'
import {useCreateStaticLinks, useFetchStaticLinks} from './core/_hooks'
import {StaticLink} from './core/_models'
import EditStaticLink from './components/EditStaticLink'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import Button from '../../../_cloner/helpers/components/Modules/Button'
import Modal from '../../../_cloner/helpers/Modal'
import {useFormik} from 'formik'
import Input from '../../../_cloner/helpers/components/Modules/Input'
import CreateStaticLink from './components/CreateStaticLink'

const StaticLinksContent = () => {
  const [items, setItems] = useState<StaticLink>({
    id: 0,
    name: '',
    content: '',
    description: '',
  })

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCreate, setIsOpenCreate] = useState(false)

  const openCreateModal = () => setIsOpenCreate(true)

  const openModal = (items: StaticLink) => {
    setItems({
      id: items.id,
      name: items.name,
      content: items.content,
      description: items.description,
    })
    setIsOpen(true)
  }

  const {data: staticlinks} = useFetchStaticLinks()

  return (
    <>
      <Card5 title='لینک های ثابت' image='/media/svg/brand-logos/aven.svg'>
        <Button onClick={openCreateModal} title='ایجاد لینک ثابت' />
        <MainGrid data={staticlinks} columnDefs={StaticLinks(openModal)} />
      </Card5>
      <CreateStaticLink isOpen={isOpenCreate} setIsOpen={setIsOpenCreate} />
      <EditStaticLink isOpen={isOpen} setIsOpen={setIsOpen} items={items} />
    </>
  )
}

export default StaticLinksContent
