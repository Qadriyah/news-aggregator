/* eslint-disable react-hooks/exhaustive-deps */
import { debounce } from "lodash";
import {
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
  useTransition,
} from "react";
import { useNavigate, useSearchParams } from "react-router";
import Spinner from "../Spinner";
import SearchIcon from "./SearchIcon";
import "./search.css";

type IProps = InputHTMLAttributes<HTMLInputElement> & {
  searchParam: string;
};

const Search = ({ searchParam, ...props }: IProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

  const handleChange = useCallback(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const newSearchParams = new URLSearchParams(searchParams.toString());
      if (!value) {
        newSearchParams.delete(searchParam);
      } else {
        newSearchParams.set(searchParam, event.target.value);
      }
      startTransition(() => navigate(`?${newSearchParams.toString()}`));
    }, 500),
    [searchParams]
  );

  return (
    <div className="search-input-container">
      {isPending ? (
        <Spinner />
      ) : (
        <SearchIcon width="18px" height="18px" className="text-gray-500" />
      )}
      <input
        {...props}
        type="search"
        autoComplete="off"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
