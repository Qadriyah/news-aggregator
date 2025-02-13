const ArticleListSkeleton = () => {
  return (
    <div className="articles">
      {Array(9)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="item-wrapper animate-pulse">
            <div className="article-header">
              <div className="source-icon skeleton"></div>
              <div className="skeleton-list-item-sm"></div>
            </div>
            <div
              style={{
                height: 400,
                width: "100%",
                backgroundColor: "#262626",
              }}
            />
            <div className="article-wrapper">
              <p className="skeleton-list-item-sm"></p>
              <div className="description">
                <div className="title">
                  <p className="skeleton-list-item"></p>
                  <p className="skeleton-list-item"></p>
                  <p className="skeleton-list-item"></p>
                </div>
                <p className="skeleton-list-item-sm"></p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ArticleListSkeleton;
