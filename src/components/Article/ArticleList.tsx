import React, { use } from "react";
import { useSearchParams } from "react-router";
import { Article, Response } from "../../types/entities";
import { getPastDate } from "../../utils/helpers";
import ArticleItem from "./ArticleItem";
import "./articleList.css";

type IProps = {
  resPromise: Promise<Response>;
};

const ArticleList = ({ resPromise }: IProps) => {
  const [searchParams] = useSearchParams();
  const { articles } = use(resPromise);

  const dateParam = searchParams.get("date");
  const sourceParam = searchParams.get("source");
  const categoryParam = searchParams.get("category");
  const authorParam = searchParams.get("author");

  const filterByDate = React.useCallback(
    (data: Article[]) =>
      data.filter((article) => {
        const pastDate = getPastDate(dateParam);
        const currentDate = new Date();
        const publishedAt = new Date(article.publishedAt);
        return publishedAt <= currentDate && publishedAt >= pastDate;
      }),
    [dateParam]
  );

  const filterBySource = React.useCallback(
    (data: Article[]) =>
      data.filter((article) => {
        const sources = sourceParam.split(",").filter((el) => el !== "");

        return sources.some((el) =>
          article.source?.name?.toLowerCase()?.includes(el.toLowerCase())
        );
      }),
    [sourceParam]
  );

  const filterByCategory = React.useCallback(
    (data: Article[]) =>
      data.filter((article) => {
        const categories = categoryParam.split(",").filter((el) => el !== "");

        return categories.some((el) =>
          article.category?.toLowerCase()?.includes(el.toLowerCase())
        );
      }),
    [categoryParam]
  );

  const filterByAuthor = React.useCallback(
    (data: Article[]) =>
      data.filter((article) => {
        const authors = authorParam.split(",").filter((el) => el !== "");

        return authors.some((el) =>
          article.author?.toLowerCase()?.includes(el.toLowerCase())
        );
      }),
    [authorParam]
  );

  const filteredArticles = React.useMemo(() => {
    let data = [...articles];
    if (!dateParam && !sourceParam && !categoryParam && !authorParam)
      return articles;

    if (dateParam) data = filterByDate(data);
    if (sourceParam) data = filterBySource(data);
    if (categoryParam) data = filterByCategory(data);
    if (authorParam) data = filterByAuthor(data);

    return data;
  }, [
    articles,
    authorParam,
    categoryParam,
    dateParam,
    filterByAuthor,
    filterByCategory,
    filterByDate,
    filterBySource,
    sourceParam,
  ]);

  return (
    <div className="articles">
      {filteredArticles.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
