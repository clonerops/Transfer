import ActionButton from '../../../../_cloner/helpers/components/Modules/ActionButton'
import Modal from '../../../../_cloner/helpers/Modal'
import {StaticLinkWithoutId} from '../core/_models'
import {useFormik} from 'formik'
import {useCreateStaticLinks, useFetchStaticLinks} from '../core/_hooks'
import {FC} from 'react'
import Input from '../../../../_cloner/helpers/components/Modules/Input'

interface IProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateStaticLink: FC<IProps> = ({isOpen, setIsOpen}) => {
  const closeModal = () => setIsOpen(false)
  const initialValues = {
    name: '',
    content: '',
    description: '',
  }
  const {refetch} = useFetchStaticLinks()

  const {mutate} = useCreateStaticLinks()

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values, {setStatus, setSubmitting, resetForm}) => {
      try {
        mutate(
          {
            name: values.name,
            content: values.content,
            description: values.description,
          },
          {
            onSuccess: () => {
              setIsOpen(false)
              refetch()
              resetForm()
            },
          }
        )
      } catch (error) {
        console.log(error)
      }
    },
  })

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
        <form onSubmit={formik.handleSubmit}>
          <Input
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.name}
            errors={formik.errors.name}
            value={formik.values.name}
            onChange={formik.handleChange}
            name='name'
            type='text'
            title='نام'
          />
          <Input
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.content}
            errors={formik.errors.content}
            value={formik.values.content}
            onChange={formik.handleChange}
            name='content'
            type='text'
            title='آدرس'
          />
          <Input
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.description}
            errors={formik.errors.description}
            value={formik.values.description}
            onChange={formik.handleChange}
            name='description'
            type='text'
            title='توضیحات'
          />
          <ActionButton title='ایجاد' />
        </form>
      </div>
    </Modal>
  )
}

export default CreateStaticLink
