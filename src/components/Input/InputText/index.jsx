import { forwardRef } from "react"

export const InputText =  forwardRef(({ label, error, ...rest}, ref) => {
    return (
        <div>
            <label>
                {label}
                <textarea className="inputBox" ref={ref} {...rest}/>
                {error ? <p>{error.message}</p> : null}
            </label>
        </div>
    )
})