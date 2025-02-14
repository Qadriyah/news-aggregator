import React, { use } from "react";
import { useSearchParams } from "react-router";
import { Response } from "../../types/entities";
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

  const filteredArticles = React.useMemo(() => {
    if (!dateParam) return articles;

    const pastDate = getPastDate(dateParam);
    const data = articles.filter((article) => {
      const currentDate = new Date();
      const publishedAt = new Date(article.publishedAt);
      return publishedAt <= currentDate && publishedAt >= pastDate;
    });

    return data;
  }, [articles, dateParam]);

  return (
    <div className="articles">
      {filteredArticles.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
