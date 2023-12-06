import clsx from "clsx";

type InputProps = {
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ children, className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={clsx(
        `border-solid border-2 border-blue-200 rounded-md p-3 w-full `,
        className
      )}
    >
      {children}
    </input>
  );
};

export default Input;
