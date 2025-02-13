import { ButtonHTMLAttributes } from "react";
import { classnames } from "../../utils/helpers";
import "./button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonClass?: "button-clear" | "button-success";
};

const Button = ({
  children,
  buttonClass = "button-clear",
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={classnames("button", true && buttonClass)}>
      {children}
    </button>
  );
};

export default Button;
