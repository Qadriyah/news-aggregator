import React, { InputHTMLAttributes } from "react";

type SelectProps = InputHTMLAttributes<HTMLSelectElement> & {};
type OptionProps = InputHTMLAttributes<HTMLOptionElement>;

const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  return (
    <div style={{ display: "flex" }}>
      <div className="input-container">
        <select {...props}>{children}</select>
      </div>
    </div>
  );
};

export const Option = ({ children, ...props }: OptionProps) => {
  return (
    <option {...props} className="option">
      {children}
    </option>
  );
};

export default Select;
