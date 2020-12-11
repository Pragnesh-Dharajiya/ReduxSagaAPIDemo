const urlGetMovies = 'https://jsonplaceholder.typicode.com/todos';
function* getMoviesFromApi() {
  const response = yield fetch(urlGetMovies, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: '',
  });
  console.log('url', JSON.stringify(response));
  const movies = yield response.status === 200
    ? JSON.parse(response._bodyInit)
    : [];
  return movies;
}
export const Api = {
  getMoviesFromApi,
};
