export type Article = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  category: string;
};

export type BaseResponse = {
  status: string;
  articles: Article[];
  totalResults: number;
  error?: string;
  copyright: string;
  response: {
    docs: Array<{
      abstract: string;
      byline: {
        original: string;
      };
      pub_date: string;
      source: string;
      web_url: string;
      lead_paragraph: string;
      multimedia: Array<{
        url: string;
      }>;
    }>;
  };
};
