import { ChangeEvent } from "react";
import { useNavigate, useSearchParams } from "react-router";
import dateOptions from "../../data/dateOptions.json";
import Button from "../Button/Button";
import Input from "../Input";
import Select, { Option } from "../Select";
import "./filters.css";

const Filters = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { value, id } = event.target;
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (!value) newSearchParams.delete(id);
    if (value) {
      newSearchParams.set(id, value);
    }
    navigate(`?${newSearchParams.toString()}`);
  };

  const clearFilters = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("date");
    newSearchParams.delete("category");
    newSearchParams.delete("source");
    newSearchParams.delete("author");
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
      <Input
        placeholder="category1,category2"
        id="category"
        onChange={handleChange}
        value={searchParams.get("category") || ""}
      />
      <Input
        placeholder="source1,source2"
        id="source"
        onChange={handleChange}
        value={searchParams.get("source") || ""}
      />
      <Input
        placeholder="author1,author2"
        id="author"
        onChange={handleChange}
        value={searchParams.get("author") || ""}
      />
      <Button onClick={clearFilters}>Clear filters</Button>
    </div>
  );
};

export default Filters;
