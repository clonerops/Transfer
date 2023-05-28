import React, {FC, useState} from 'react'
import Modal from '../../../../_cloner/helpers/Modal'
import {useFormik} from 'formik'
import {useEditStaticLinks, useFetchStaticLinks} from '../core/_hooks'
import {StaticLink} from '../core/_models'
import Input from '../../../../_cloner/helpers/components/Modules/Input'

interface IProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    items: StaticLink
}

const EditStaticLink:FC<IProps> = ({isOpen, setIsOpen, items}) => {
  const closeModal = () => setIsOpen(false)


  const {mutate} = useEditStaticLinks()
  const {refetch} = useFetchStaticLinks()

  const formik = useFormik({
    initialValues: items,
    enableReinitialize: true,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      try {
        mutate(
          {
            id: values.id,
            name: values.name,
            content: values.content,
            description: values.description,
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
          <button
            type='submit'
            className='inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
          >
            ثبت
          </button>
        </form>
      </div>
      {/* <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
          <button
            type='button'
            className='inline-flex w-full justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
            onClick={closeModal}
          >
            بستن
          </button>
        </div> */}
    </Modal>
  )
}

export default EditStaticLink
