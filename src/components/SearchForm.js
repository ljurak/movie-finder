import React from 'react';

import { MoviesApi } from '../api';

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			year: '',
			type: ''
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value.trim() });
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const { title, year, type } = { ...this.state };
		if (!title) {
			return;
		}

		const { fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesError, setPage, setPageUrl } = this.props; 

		setPage(0);
		fetchMoviesRequest();
		MoviesApi.searchMovies(title, year, type)
			.then(resp => {
				setPageUrl(resp.url);
				return resp.json();
			})
			.then(movies => {
				if (movies.Error) {
					return Promise.reject(movies.Error);
				}
				fetchMoviesSuccess(movies.Search, true);
				setPage(1);
			})
			.catch(error => fetchMoviesError(error));
	}

	render() {
		const { title, year, type } = this.state;

		return (
			<form className="search-form" action="#" onSubmit={this.handleSubmit}>
				<div className="form-row">
					<input id="title" className={title ? 'filled' : ''} name="title" type="text" value={title} onChange={this.handleChange} />
					<label htmlFor="title">Title*</label>							
				</div>
				<div className="form-row">
					<input id="year" className={year ? 'filled' : ''} name="year" type="text" value={year} onChange={this.handleChange} />
					<label htmlFor="year">Year</label>							
				</div>
				<div className="form-row">
					<select id="type" className={type ? 'filled' : ''} name="type" value={type} onChange={this.handleChange}>
						<option value="">Type</option>
						<option value="movie">Movie</option>
						<option value="series">Series</option>
						<option value="episode">Episode</option>
					</select>
					<label htmlFor="type">Type</label>
				</div>
				<div className="form-row">
					<button className="submit-btn">Search</button>
				</div>
			</form>
		);
	}
}

export default SearchForm;