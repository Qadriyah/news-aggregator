import { Suspense } from "react";
import ArticleList from "../components/Article/ArticleList";
import Button from "../components/Button/Button";
import Select, { Option } from "../components/Select/Select";
import ArticleListSkeleton from "../components/skeletons/ArticleListSkeleton";
import dateOptions from "../data/dateOptions.json";
import { get } from "../http/fetch";
import { Response } from "../types/entities";

const NEWS_API = process.env.REACT_APP_NEWS_API;
const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const Home = () => {
  const res = get<Response>(`${NEWS_API}?q=bitcoin&apiKey=${NEWS_API_KEY}`);

  return (
    <div className="content-wrapper">
      <p>Filter result</p>
      <div className="filters">
        <Select>
          {dateOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
        <Select>
          <Option value="Any time">Any category</Option>
          <Option value="Any time">Category 1</Option>
          <Option value="Past hour">Category 2</Option>
          <Option value="Past 24 hours">Category 3</Option>
        </Select>
        <Select>
          <Option value="Any time">Any source</Option>
          <Option value="Any time">Source 1</Option>
          <Option value="Past hour">Source 2</Option>
          <Option value="Past 24 hours">Source 3</Option>
          <Option value="Past week">Source 4</Option>
        </Select>
        <Button>Clear filters</Button>
      </div>
      <Suspense fallback={<ArticleListSkeleton />}>
        <ArticleList resPromise={res} />
      </Suspense>
    </div>
  );
};

export default Home;
