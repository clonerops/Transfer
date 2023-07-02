import ActionButton from '../../../../_cloner/helpers/components/Modules/ActionButton'
import Modal from '../../../../_cloner/helpers/Modal'
import {useFormik} from 'formik'
import {useCreateNews, useFetchNews} from '../core/_hooks'
import {FC} from 'react'
import Input from '../../../../_cloner/helpers/components/Modules/Input'
import SelectOption from '../../../../_cloner/helpers/components/Modules/SelectOption'

interface IProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const isStatus = [
  {id: 1, title: 'انتشار'},
  {id: 2, title: 'عدم انتشار'}
]
const isType = [
  {id: 1, title: 'اخبار'},
  {id: 2, title: 'اطلاعیه'}
]

const CreateNews: FC<IProps> = ({isOpen, setIsOpen}) => {
  const closeModal = () => setIsOpen(false)
  const initialValues = {
    id: 0,
    Title: '',
    Content: '',
    STATUS: '',
    Type: '',
    UserId: '',
    Image: '',
  }
  const {refetch} = useFetchNews()

  const {mutate} = useCreateNews()

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      try {
        mutate(
          {
            Title: values.Title,
            Content: values.Content,
            STATUS: values.STATUS,
            Type: values.Type,
            Image: values.Image,
            UserId: 0
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
            title='پاسخ'
          />
          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.STATUS}
            errors={formik.errors.STATUS}
            isCreate={true}
            name={'STATUS'}
            id={'STATUS'}
            title='وضعیت انتشار'
          >
            <option value=''>انتخاب کنید...</option>
            {isStatus?.map((item: any) => {
              return <option value={item.id}>{item.title}</option>
            })}
          </SelectOption>
          <SelectOption
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.Type}
            errors={formik.errors.Type}
            isCreate={true}
            name={'Type'}
            id={'Type'}
            title='نوع خبر'
          >
            <option value=''>انتخاب کنید...</option>
            {isType?.map((item: any) => {
              return <option value={item.id}>{item.title}</option>
            })}
          </SelectOption>
          <span>
            آپلود
          <Input
            getFieldProps={formik.getFieldProps}
            touched={formik.touched.Image}
            errors={formik.errors.Image}
            value={formik.values.Image}
            onChange={formik.handleChange}
            name='Image'
            type='file'
          />
          </span>

          <ActionButton title='ایجاد' />
        </form>
      </div>
    </Modal>
  )
}

export default CreateNews
