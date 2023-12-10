import clsx from "clsx";
import React, { InputHTMLAttributes, forwardRef } from "react";

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;
const DateInput = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type="date"
        className={clsx(
          `border-solid border-2 border-blue-200 rounded-md p-3`,
          className
        )}
      >
        {children}
      </input>
    );
  }
);

export default DateInput;
