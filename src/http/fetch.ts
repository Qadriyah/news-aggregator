export const get = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const result = await response.json();
    return result;
  } catch (err) {
    return new Promise((resolve) =>
      resolve({
        status: "error",
        totalResults: 0,
        articles: [],
        error: err.message,
        response: {
          docs: [],
        },
      } as any)
    );
  }
};
