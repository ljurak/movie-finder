const BASE_API_URL = 'http://www.omdbapi.com/?apikey=9803e4dd';

const MoviesApi = {};

MoviesApi.fetchMovies = function(title, year, type) {
	let url = BASE_API_URL;
	if (title) {
		url += `&s=${title}`;
	}
	if (year) {
		url += `&y=${year}`;
	}
	if (type) {
		url += `&type=${type}`;
	}

	return fetch(url);
};

export { MoviesApi };