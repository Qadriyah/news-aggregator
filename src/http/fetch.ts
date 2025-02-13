export const get = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    const result = await response.json();
    return result;
  } catch (err) {
    return new Promise((resolve) =>
      resolve({
        status: "error",
        totalResults: 0,
        articles: [],
        error: err.message,
      } as any)
    );
  }
};
