import { forwardRef } from "react"

export const InputSelect = forwardRef(({ children, label, error, ...rest}, ref) => {
    return (
        <div>
            <label>
                {label}
                <select className="inputBox" ref={ref} {...rest}>
                    {children}
                </select>
                {error ? <p>{error.message}</p> : null}
            </label>
        </div>
    )
})