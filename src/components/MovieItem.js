import React, { useState } from 'react';

import Modal from './Modal';
import MovieModal from './MovieModal';

const MovieItem = ({ movie }) => {
	const [ showModal, setShowModal ] = useState(false);

	const openModal = () => setShowModal(true);

	const closeModal = (e) => {
		if (e.target === e.currentTarget) {
			setShowModal(false);
		}
	};

	return (
		<article className="movie-box">
			<div className="movie-wrapper" onClick={openModal}>
				<figure className="movie-photo">
					<img src={movie.Poster} alt="Movie poster" />
				</figure>
				<h3 className="movie-title">{movie.Title}</h3>
				<p className="movie-release">{movie.Year}</p>
			</div>
			{showModal &&
				<Modal>
					<MovieModal id={movie.imdbID} closeModal={closeModal} />
				</Modal>
			}
		</article>
	);
};

export default MovieItem;