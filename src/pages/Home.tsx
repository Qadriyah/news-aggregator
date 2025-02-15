import React, { Suspense } from "react";
import { useSearchParams } from "react-router";
import ArticleList from "../components/Article/ArticleList";
import Filters from "../components/Filters/Filters";
import ArticleListSkeleton from "../components/skeletons/ArticleListSkeleton";
import { get } from "../http/fetch";
import { BaseResponse } from "../types/entities";

const NEWS_API = process.env.REACT_APP_NEWS_API;
const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const NEW_YORK_TIMES_API = process.env.REACT_APP_NEW_YORK_TIMES_API;
const NEW_YORK_TIMES_API_KEY = process.env.REACT_APP_NEW_YORK_TIMES_API_KEY;

const GUARDIAN_API = process.env.REACT_APP_GUARDIAN_API;
const GUARDIAN_API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;

const Home = () => {
  const [searchParams] = useSearchParams();
  const [resPromise, setResPromise] = React.useState<
    Promise<PromiseSettledResult<BaseResponse>[]>
  >(new Promise((resolve) => resolve(null)));

  const query = searchParams.get("q");

  React.useEffect(() => {
    const res = Promise.allSettled<BaseResponse>([
      get<BaseResponse>(`${NEWS_API}?q=${query}&apiKey=${NEWS_API_KEY}`),
      get<BaseResponse>(
        `${NEW_YORK_TIMES_API}?q=${query}&api-key=${NEW_YORK_TIMES_API_KEY}`
      ),
      get<BaseResponse>(
        `${GUARDIAN_API}?q=${query}&api-key=${GUARDIAN_API_KEY}`
      ),
    ]);
    setResPromise(res);
  }, [query]);

  return (
    <div className="content-wrapper">
      <p>Filter result</p>
      <Filters />
      <Suspense fallback={<ArticleListSkeleton />}>
        <ArticleList resPromise={resPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
