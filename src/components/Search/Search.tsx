import { InputHTMLAttributes, useTransition } from "react";
import Spinner from "../Spinner";
import SearchIcon from "./SearchIcon";
import "./search.css";

type IProps = InputHTMLAttributes<HTMLInputElement> & {
  searchParam: string;
};

const Search = ({ searchParam, ...props }: IProps) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="search-input-container">
      {isPending ? (
        <Spinner />
      ) : (
        <SearchIcon width="18px" height="18px" className="text-gray-500" />
      )}
      <input {...props} type="search" name="search" autoComplete="off" />
    </div>
  );
};

export default Search;
