import React, { use } from "react";
import { useSearchParams } from "react-router";
import { Article, BaseResponse } from "../../types/entities";
import { getPastDate } from "../../utils/helpers";
import ArticleItem from "./ArticleItem";
import "./articleList.css";

type IProps = {
  resPromise: Promise<PromiseSettledResult<BaseResponse>[]>;
};

const ArticleList = ({ resPromise }: IProps) => {
  const [searchParams] = useSearchParams();
  const results = use(resPromise);

  const isFulfilled = <T,>(
    input: PromiseSettledResult<T>
  ): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

  const [res1, res2] = results.filter(isFulfilled);
  let articles = res1.value.articles;
  articles = articles?.concat(
    res2.value.response.docs.map((el) => ({
      source: {
        id: "",
        name: el.source,
      },
      author: el.byline.original,
      title: el.abstract,
      description: el.lead_paragraph,
      url: el.web_url,
      urlToImage: el.multimedia[0]?.url,
      publishedAt: el.pub_date,
      content: "",
      category: "",
    }))
  );

  const filterParams: Record<string, string> = React.useMemo(
    () => ({
      date: searchParams.get("date"),
      source: searchParams.get("source"),
      category: searchParams.get("category"),
      author: searchParams.get("author"),
    }),
    [searchParams]
  );

  const filterByDate = React.useCallback(
    (data: Article[]) =>
      data.filter((article) => {
        const pastDate = getPastDate(filterParams.date);
        const currentDate = new Date();
        const publishedAt = new Date(article.publishedAt);
        return publishedAt <= currentDate && publishedAt >= pastDate;
      }),
    [filterParams.date]
  );

  const filterResult = React.useCallback(
    (data: Article[], q: "source" | "category" | "author") =>
      data.filter((articlle) => {
        const filterOptions = filterParams[q]
          .split(",")
          .filter((el) => el !== "");

        return filterOptions.some((el) =>
          q === "source"
            ? articlle[q]?.name?.toLowerCase()?.includes(el.toLowerCase())
            : articlle[q]?.toString()?.toLowerCase()?.includes(el.toLowerCase())
        );
      }),
    [filterParams]
  );

  const filteredArticles = React.useMemo(() => {
    let data = [...articles];
    if (
      !filterParams.date &&
      !filterParams.source &&
      !filterParams.category &&
      !filterParams.author
    )
      return articles;

    if (filterParams.date) data = filterByDate(data);
    if (filterParams.source) data = filterResult(data, "source");
    if (filterParams.category) data = filterResult(data, "category");
    if (filterParams.author) data = filterResult(data, "author");

    return data;
  }, [
    articles,
    filterByDate,
    filterParams.author,
    filterParams.category,
    filterParams.date,
    filterParams.source,
    filterResult,
  ]);

  return (
    <div className="articles">
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article, index) => (
          <ArticleItem key={index} article={article} />
        ))
      ) : (
        <div>There are no articles to display</div>
      )}
    </div>
  );
};

export default ArticleList;
