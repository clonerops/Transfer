import React, {FC} from 'react'
import Modal from '../../../../_cloner/helpers/Modal'
import {useFormik} from 'formik'
import {useConfirmReserve, useGetCustomReserve} from '../core/_hooks'
import Input from '../../../../_cloner/helpers/components/Modules/Input'

interface IProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    items: any
}

const ConfirmReserve:FC<IProps> = ({isOpen, setIsOpen, items}) => {
  const closeModal = () => setIsOpen(false)


  const { mutate } = useConfirmReserve()
  const {refetch} = useGetCustomReserve()

  const formik = useFormik({
    initialValues: items,
    enableReinitialize: true,
    onSubmit: async (values, {setStatus, setSubmitting, resetForm}) => {
      try {
        mutate(
          {
            id: values.id,
            description: values.description
          },
          {
            onSuccess: () => {
              refetch()
              closeModal()
            },
          }
        )
      } catch (error) {
        resetForm()
        closeModal()
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
            touched={formik.touched.description}
            errors={formik.errors.description}
            value={formik.values.description}
            onChange={formik.handleChange}
            name='description'
            type='text'
            title='توضیحات'
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

export default ConfirmReserve
