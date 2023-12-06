import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "danger" | "warning" | "success";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-4 w-full rounded-md font-semibold text-sm shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "text-white bg-blue-500 hover:bg-blue-400": variant === "primary",
          "text-white bg-sky-500 hover:bg-sky-400": variant === "secondary",
          "text-white bg-red-600 hover:bg-red-800": variant === "danger",
          "text-white bg-yellow-400 hover:bg-yellow-300": variant === "warning",
          "text-white bg-green-500 hover:bg-green-400": variant === "success",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
