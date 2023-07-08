import clsx from "clsx";

const Input = (props: any) => {
    return (
        <>
            {props.login ? (
                <div className="fv-row mb-8">
                    <label className="form-label fs-6 fw-bolder text-dark">
                        {props.title}
                    </label>
                    <input
                        placeholder={props.title}
                        {...props.getFieldProps(props.name)}
                        className={clsx(
                            "form-control bg-transparent",
                            {
                                "is-invalid": props.touched && props.errors,
                            },
                            {
                                "is-valid": props.touched && !props.errors,
                            }
                        )}
                        type={props.type}
                        ref={props.ref}
                        name={props.name}
                        autoComplete="off"
                    />
                    {props.touched && props.errors && (
                        <div className="fv-plugins-message-container">
                            <span role="alert">{props.errors}</span>
                        </div>
                    )}
                </div>
            ) : props.search ? (
                <div className="fv-row mb-8">
                    <label className="form-label fs-6 fw-bolder text-dark">
                        {props.title}
                    </label>
                    <input
                        {...props.getFieldProps(props.name)}
                        className={clsx(
                            "form-control h-12 bg-transparent text-center font-VazirBold text-2xl",
                            {
                                "is-invalid": props.touched && props.errors,
                            },
                            {
                                "is-valid": props.touched && !props.errors,
                            }
                        )}
                        type={props.type}
                        name={props.name}
                        ref={props.ref}
                        value={props.value}
                        onChange={props.onChange}
                        autoComplete="off"
                    />
                    {props.touched && props.errors && (
                        <div className="fv-plugins-message-container pt-4">
                            <span role="alert">{props.errors}</span>
                        </div>
                    )}
                </div>
            ) : props.file ? (
              <div>
                    <input
                        {...props.getFieldProps(props.name)}
                        defaultValue={props.defaultValue}
                        ref={props.ref}
                        className={clsx(
                            `${props.className} form-control text-md h-10 border border-gray-400 bg-transparent text-center font-VazirBold`,
                            {
                                "is-invalid": props.touched && props.errors,
                            },
                            {
                                "is-valid": props.touched && !props.errors,
                            }
                        )}
                        type={props.type}
                        name={props.name}
                        value={props.value}
                        id={props.id}
                        disabled={props.disabled}
                        onChange={props.onChange}
                        autoComplete="off"
                    />
                    {props.touched && props.errors && (
                        <div className="fv-plugins-message-container">
                            <span role="alert" className="text-red-500">
                                {props.errors}
                            </span>
                        </div>
                    )}
                </div>
            ) : props.reqular ? (
                <div className="">
                    <label className="dropdown__label">
                        {props.title}
                    </label>
                    <input
                        defaultValue={props.defaultValue}
                        type={props.type}
                        placeholder={props.placeholder}
                        name={props.name}
                        ref={props.ref}
                        value={props.value}
                        className={`form-control rounded-md text-md h-11 border border-gray-400 bg-transparent text-center font-VazirBold ${props.className}`}
                        id={props.id}
                        disabled={props.disabled}
                        onChange={props.onChange}
                        autoComplete="off"
                    />
                </div>
            ) : (
                <div className="fv-row mb-4 flex-1 flex flex-col items-start">
                    <label className="form-label fw-bolder text-dark">
                        {props.title}
                    </label>
                    <input
                        {...props.getFieldProps(props.name)}
                        defaultValue={props.defaultValue}
                        className={clsx(
                            `${props.className} form-control text-md h-10 border border-gray-400 bg-transparent text-center font-VazirBold`,
                            {
                                "is-invalid": props.touched && props.errors,
                            },
                            {
                                "is-valid": props.touched && !props.errors,
                            }
                        )}
                        type={props.type}
                        name={props.name}
                        value={props.value}
                        ref={props.ref}
                        id={props.id}
                        disabled={props.disabled}
                        onChange={props.onChange}
                        autoComplete="off"
                    />
                    {props.touched && props.errors && (
                        <div className="fv-plugins-message-container">
                            <span role="alert" className="text-red-500">
                                {props.errors}
                            </span>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Input;
