import React from 'react';

const MovieItem = ({ movie }) => (
	<article className="movie-box">
		<div className="movie-wrapper">
			<figure className="movie-photo">
				<img src={movie.Poster} alt="Movie poster" />
			</figure>
			<h3 className="movie-title">{movie.Title}</h3>
			<p className="movie-release">{movie.Year}</p>
		</div>
	</article>
);

export default MovieItem;