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

export type SearchParams = {
  q: string;
};

export type Response = {
  status: string;
  totalResults: number;
  articles: Article[];
  error?: string;
};
