import { forwardRef } from "react";
import "./style.scss"


export const Input = forwardRef(({ label, error, ...rest }, ref) => {
    return (
       <div>
          <label>
             {label}
             <input className="inputBox" ref={ref} {...rest} />
             {error ? <p>{error.message}</p> : null}
          </label>
       </div>
    );
 });