const API_KEY = "3d27593948a5340e1af6efc162165567";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchMovieThrillers: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchTvComedies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchDocumentaryFilms: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvDrama: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
}

export default requests;