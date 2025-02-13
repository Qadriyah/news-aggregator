import React from "react";

type IProps = {
  color?: string;
};

const Spinner: React.FC<IProps> = ({ color }) => {
  return <div className="spinner"></div>;
};

export default Spinner;
