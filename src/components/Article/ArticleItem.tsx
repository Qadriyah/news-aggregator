import { Link } from "react-router";
import { Article } from "../../types/entities";
import { getInitial, timeSince } from "../../utils/helpers";
import "./articleItem.css";

type IProps = {
  article: Article;
};

const ArticleItem = ({ article }: IProps) => {
  return (
    <Link to={article.url} target="_blank" className="item-wrapper">
      <div className="article-header ">
        <div className="source-icon">{getInitial(article.source.name)}</div>
        <div>{article.source.name}</div>
      </div>
      <div
        style={{
          height: 400,
          width: "100%",
          backgroundColor: "#262626",
          backgroundImage: `url(${article.urlToImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="article-wrapper">
        <p>{timeSince(article.publishedAt)}</p>
        <div className="description">
          <div className="title">{article.title}</div>
          <p>{`By - ${article.author}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleItem;
