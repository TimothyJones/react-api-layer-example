const handleError = (error) => ({ error });

export const createApi = (baseUrl) => {
  const getJson = (path) =>
    fetch(`${baseUrl}${path}`).then((res) => res.json());

  return {
    getItems: () => getJson('/items.json').catch(handleError),
  };
};

export default createApi('http://localhost:3000');
