import clsx from "clsx";

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

const DateInput = ({ children, className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      type="date"
      className={clsx(
        `border-solid border-2 border-blue-200 rounded-md p-3`,
        className
      )}
    >
      {children}
    </input>
  );
};

export default DateInput;
