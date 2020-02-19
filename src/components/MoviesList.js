import React from 'react';

import MovieItem from './MovieItem';
import LoadingSpinner from './LoadingSpinner';
import ErrorInfo from './ErrorInfo';

const MoviesList = ({ movies, isFetching, error }) => {
	if (!movies.length && isFetching) {
		return <LoadingSpinner />;
	}

	return (
		<>
			{movies.map(movie => 
				<MovieItem key={movie.imdbID} movie={movie} />
			)}
			{error && <ErrorInfo error={error} />}
		</>
	);
};

export default MoviesList;