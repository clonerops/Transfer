import Select from 'react-select'

const SelectOption = (props: any) => {
  const customStyles = {
    control: (baseStyles: any, state: any) => ({
      ...baseStyles,
      borderColor: '#B5B5C3',
      minHeight: '34px',
      height: '34px',
      borderRadius: '6px',
    }),
  }

  return props.isMulti ? (
    <>
      <div className='flex flex-col items-start p-1 py-2'>
        <label className='font-IRANSans text-md inline-block p-2 text-left font-YekanBold'>
          {props.title}:
        </label>
        <Select
          isClearable
          value={props.value}
          onChange={props.onChange}
          styles={customStyles}
          options={props.options}
          placeholder={props.placeholder}
          className='w-full'
          noOptionsMessage={() => 'درحال بارگزاری...'}
          name={props.name}
          isMulti={props.isMulti}
        />
        {props.touched && props.errors && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block text-red-500'>{props.errors}</div>
          </div>
        )}
      </div>
    </>
  ) : props.isCreate ? (
    <>
      <div className='fv-row mb-4 flex flex-col items-start p-1 py-2'>
        <label className='form-label fw-bolder text-dark'>{props.title}</label>
        <select
          className={`form-select form-select-sm form-select-white border border-gray-400 p-2 ${props.width}`}
          {...props.getFieldProps(props.name)}
          multiple={props.multiple}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          disabled={props.disabled}
        >
          {props.children}
        </select>
        {props.touched && props.errors && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block text-red-500'>{props.errors}</div>
          </div>
        )}
      </div>
    </>
  ) : (
    <>
      <div className='fv-row mb-4 flex flex-col items-start p-1 py-2'>
        <label className='form-label fw-bolder text-dark'>{props.title}</label>
        <select
          className={`form-select form-select-sm form-select-white border border-gray-400 p-2 ${props.width}`}
          {...props.getFieldProps(props.name)}
          multiple={props.multiple}
          defaultValue={props.defaultValue}
          id={props.id}
          disabled={props.disabled}
        >
          {props.children}
        </select>
        {props.touched && props.errors && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block text-red-500'>{props.errors}</div>
          </div>
        )}
      </div>
    </>
  )
}

export default SelectOption
