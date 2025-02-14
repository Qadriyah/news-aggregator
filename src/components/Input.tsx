import { InputHTMLAttributes } from "react";

type IProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (props: IProps) => {
  return (
    <div className="input-container">
      <input {...props} />
    </div>
  );
};

export default Input;
