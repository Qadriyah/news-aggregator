import React, { InputHTMLAttributes } from "react";
import "./select.css";

type SelectProps = InputHTMLAttributes<HTMLSelectElement> & {};
type OptionProps = InputHTMLAttributes<HTMLOptionElement>;

const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  return (
    <div style={{ display: "flex" }}>
      <div className="select-wrapper">
        <select {...props} className="select">
          {children}
        </select>
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
