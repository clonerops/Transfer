import {DatePicker} from 'zaman'


const DatepickerComponent = (props: any) => {

    // console.log("date", moment(date.value).format("jYYYY/jMM/jDD"))
  
    return (
    <div className='p-1 py-2'>
      <label className='font-IRANSans text-md inline-block p-2 text-left font-VazirBold'>
        {props.title}:
      </label>

      <DatePicker
        {...props.getFieldProps(props.name)}
        round='x4'
        onChange={(d: any)  =>props.date(d)}
        inputClass='form-control bg-transparent h-10 border border-gray-400 p-2 '
        inputAttributes={{
          placeholder: props.placeholder,
        }}
      />
    </div>
  )
}

export default DatepickerComponent
