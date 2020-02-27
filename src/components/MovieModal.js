import React from 'react';

import { MoviesApi } from '../api';

class MovieModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: null
		}
	}

	componentDidMount() {
		MoviesApi.fetchMovie(this.props.id)
			.then(resp => resp.json())
			.then(movie => this.setState({ movie }));
	}

	render() {
		const closeModal = this.props.closeModal;
		const movie = this.state.movie;
		
		if (!movie) {
			return null;
		}

		return (
			<div className="modal" onClick={closeModal}>
				<div className="modal-content">
					<button className="close-btn" type="button" onClick={closeModal}>X</button>
					<h2 className="movie-title">{movie.Title}</h2>
					<div className="movie-info">
						<figure className="movie-poster">
							<img src={movie.Poster} alt="Movie poster"/>
						</figure>
						<div className="movie-details">
							<p className="movie-released">
								Released: 
								{' '}
								{movie.Released}
							</p>
							<p className="movie-country">
								Country:
								{' '} 
								{movie.Country}
							</p>
							<p className="movie-runtime">
								Runtime:
								{' '} 
								{movie.Runtime}
							</p>
							<p className="movie-genre">
								Genre:
								{' '} 
								{movie.Genre}
							</p>
							<p className="movie-director">
								Director:
								{' '} 
								{movie.Director}
							</p>
							<p className="movie-actors">
								Actors:
								{' '} 
								{movie.Actors}
							</p>
							<p className="movie-plot">
								Plot:
								{' '} 
								{movie.Plot}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieModal;