import React from 'react'
import clsx from 'clsx'

const Input = (props: any) => {
    return (
        <>
            {props.login ? (
                <div className='fv-row mb-8'>
                    <label className='form-label fs-6 fw-bolder text-dark'>{props.title}</label>
                    <input placeholder={props.title} {...props.getFieldProps(props.name)} className={clsx('form-control bg-transparent', {
                        'is-invalid': props.touched && props.errors
                    }, {
                        'is-valid': props.touched && !props.errors
                    })} type={props.type} name={props.name} autoComplete='off' />
                    {props.touched && props.errors && <div className='fv-plugins-message-container'>
                        <span role='alert'>{props.errors}</span>
                    </div>}
                </div>
            ) : null}
        </>

    )
}

export default Input