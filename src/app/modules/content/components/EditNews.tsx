import React, {FC} from 'react'
import Modal from '../../../../_cloner/helpers/Modal'
import {useFormik} from 'formik'
import {useEditNews, useFetchNews} from '../core/_hooks'
import {News} from '../core/_models'
import Input from '../../../../_cloner/helpers/components/Modules/Input'

interface IProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    items: News
}

const EditNews:FC<IProps> = ({isOpen, setIsOpen, items}) => {
  const closeModal = () => setIsOpen(false)


  const {mutate} = useEditNews()
  const {refetch} = useFetchNews()

  const formik = useFormik({
    initialValues: items,
    enableReinitialize: true,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      try {
        mutate(
          {
            id: values.id,
            Title: values.Title,
            Content: values.Content,
            STATUS: values.STATUS,
            Type: values.Type,
            Image: values.Image,
            UserId: 0
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
            touched={formik.touched.Title}
            errors={formik.errors.Title}
            value={formik.values.Title}
            onChange={formik.handleChange}
            name='Title'
            type='text'
            title='عنوان'
          />
          <Input
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.Content}
            errors={formik.errors.Content}
            value={formik.values.Content}
            onChange={formik.handleChange}
            name='Content'
            type='text'
            title='موضوع'
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

export default EditNews
