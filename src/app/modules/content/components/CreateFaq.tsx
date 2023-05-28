import ActionButton from '../../../../_cloner/helpers/components/Modules/ActionButton'
import Modal from '../../../../_cloner/helpers/Modal'
import {useFormik} from 'formik'
import {useCreateFaq, useFetchFaq} from '../core/_hooks'
import {FC} from 'react'
import Input from '../../../../_cloner/helpers/components/Modules/Input'

interface IProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateFaq: FC<IProps> = ({isOpen, setIsOpen}) => {
  const closeModal = () => setIsOpen(false)
  const initialValues = {
    question: '',
    answer: '',
  }
  const {refetch} = useFetchFaq()

  const {mutate} = useCreateFaq()

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      try {
        mutate(
          {
            question: values.question,
            answer: values.answer,
          },
          {
            onSuccess: () => {
              setIsOpen(false)
              refetch()
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
            touched={formik.touched.question}
            errors={formik.errors.question}
            value={formik.values.question}
            onChange={formik.handleChange}
            name='question'
            type='text'
            title='پرسش'
          />
          <Input
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.answer}
            errors={formik.errors.answer}
            value={formik.values.answer}
            onChange={formik.handleChange}
            name='answer'
            type='text'
            title='پاسخ'
          />

          <ActionButton title='ایجاد' />
        </form>
      </div>
    </Modal>
  )
}

export default CreateFaq
