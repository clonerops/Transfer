import React, {FC} from 'react'
import Modal from '../../../../_cloner/helpers/Modal'
import {useFormik} from 'formik'
import {useAnswerTicket, useEditFaq, useFetchCustomTicket, useFetchFaq, useFetchTicket} from '../core/_hooks'
import {Ticket} from '../core/_models'
import Input from '../../../../_cloner/helpers/components/Modules/Input'

interface IProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    items: Ticket
}

const AnswerTicket:FC<IProps> = ({isOpen, setIsOpen, items}) => {
  const closeModal = () => setIsOpen(false)


  const {mutate} = useAnswerTicket()
  const { refetch } = useFetchCustomTicket()

  const formik = useFormik({
    initialValues: items,
    enableReinitialize: true,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      try {
        mutate(
          {
            id: values.id,
            answerDesc: values.answerDesc
          },
          {
            onSuccess: () => {
              refetch()
              closeModal()
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
            touched={formik.touched.id}
            errors={formik.errors.id}
            value={formik.values.id}
            onChange={formik.handleChange}
            name='id'
            type='hidden'
            />
          <Input
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.ticketDesc}
            errors={formik.errors.ticketDesc}
            value={formik.values.ticketDesc}
            disabled={true}
            name='ticketDesc'
            type='text'
            title='پرسش'
          />
          <Input
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.answerDesc}
            errors={formik.errors.answerDesc}
            value={formik.values.answerDesc}
            onChange={formik.handleChange}
            name='answerDesc'
            type='text'
            title='پاسخ'
          />
          <button
            type='submit'
            className='inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
          >
            ثبت
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default AnswerTicket
