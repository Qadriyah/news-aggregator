import { ChangeEvent } from "react";
import { useNavigate, useSearchParams } from "react-router";
import dateOptions from "../../data/dateOptions.json";
import Button from "../Button/Button";
import Select, { Option } from "../Select";
import "./filters.css";

const Filters = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value, id } = event.target;
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (value) {
      newSearchParams.set(id, value);
    }
    navigate(`?${newSearchParams.toString()}`);
  };

  return (
    <div className="filters">
      <Select
        id="date"
        onChange={handleChange}
        value={searchParams.get("date") || "AnyTime"}
      >
        {dateOptions.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      <Select onChange={handleChange}>
        <Option value="Any time">Any category</Option>
        <Option value="Any time">Category 1</Option>
        <Option value="Past hour">Category 2</Option>
        <Option value="Past 24 hours">Category 3</Option>
      </Select>
      <Select
        id="source"
        onChange={handleChange}
        value={searchParams.get("source") || "Any source"}
      >
        <Option value="Any time">Any source</Option>
        <Option value="Any time">Source 1</Option>
        <Option value="Past hour">Source 2</Option>
        <Option value="Past 24 hours">Source 3</Option>
        <Option value="Past week">Source 4</Option>
      </Select>
      <Button>Clear filters</Button>
    </div>
  );
};

export default Filters;
