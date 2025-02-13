import { use } from "react";
import { Response } from "../../types/entities";
import ArticleItem from "./ArticleItem";
import "./articleList.css";

type IProps = {
  resPromise: Promise<Response>;
};

const ArticleList = ({ resPromise }: IProps) => {
  const { articles } = use(resPromise);

  return (
    <div className="articles">
      {articles?.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
