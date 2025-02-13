import ArticleItem from "../components/ArticleItem/ArticleItem";
import Button from "../components/Button/Button";
import Select, { Option } from "../components/Select/Select";
import articles from "../data/articles.json";
import dateOptions from "../data/dateOptions.json";

const Home = () => {
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
      <div className="articles">
        {articles.map((article, index) => (
          <ArticleItem key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
