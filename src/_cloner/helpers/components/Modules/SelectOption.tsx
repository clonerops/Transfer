// import {FC} from 'react'

// interface IProps {
//   title: string
//   width?: string
//   children?: React.ReactNode
//   value?: any
//   onChange?: any
//   name?: string
//   touched?: any
//   errors?: string
//   getFieldProps?: any
// }

// const SelectOption: FC<IProps> = ({
//   title,
//   getFieldProps,
//   width = '',
//   value,
//   onChange,
//   name,
//   touched,
//   errors,
//   children,
// }) => {
//   return (
//     <>
//       <section className='flex flex-col items-start p-1 py-2'>
//         <label className='font-IRANSans text-md inline-block p-2 text-left font-VazirBold'>
//           {title}:
//         </label>
//         <select
//           {...getFieldProps(name)}
//           name={name}
//           value={value}
//           className={`form-select form-select-sm form-select-white border border-gray-400 p-2 ${width}`}
//           defaultValue='Active'
//           onChange={onChange}
//         >
//           {children}
//         </select>{' '}
//         {touched && errors && (
//           <div className='fv-plugins-message-container'>
//             <div className='fv-help-block'>{errors}</div>
//           </div>
//         )}
//       </section>
//     </>
//   )
// }

// export default SelectOption

const SelectOption = (props: any) => {
  return (
    <div className='flex flex-col items-start p-1 py-2'>
      <label className='font-IRANSans text-md inline-block p-2 text-left font-VazirBold'>
        {props.title}:
      </label>
      <select
        className={`form-select form-select-sm form-select-white border border-gray-400 p-2 ${props.width}`}
        {...props.getFieldProps(props.name)}
        // name={props.name}
        // defaultValue='Active'
      >
        {props.children}
      </select>
      {props.touched && props.errors && (
        <div className='fv-plugins-message-container'>
          <div className='fv-help-block'>{props.errors}</div>
        </div>
      )}
    </div>
  )
}

export default SelectOption
