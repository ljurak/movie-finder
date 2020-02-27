const BASE_API_URL = 'http://www.omdbapi.com/?apikey=9803e4dd';

const MoviesApi = {};

MoviesApi.fetchMovie = function(id) {
	return fetch(`${BASE_API_URL}&i=${id}`);
};

MoviesApi.searchMovies = function(title, year, type) {
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

MoviesApi.fetchNextPage = function(url, page) {
	return fetch(`${url}&page=${page}`);
}

export { MoviesApi };