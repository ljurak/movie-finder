import React from 'react';

import SearchForm from './SearchForm';
import MoviesList from './MoviesList';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			isFetching: false,
			error: null
		};
	}

	componentDidMount() {
		//this.fetchMovies();
	}

	fetchMovies = () => {
		fetch('http://www.omdbapi.com/?apikey=9803e4dd&s=lake')
			.then(resp => resp.json())
			.then(movies => this.setState({ movies: movies.Search }));
	}

	fetchMoviesRequest = () => {
		this.setState({ isFetching: true, error: null });
	}

	fetchMoviesSuccess = (movies) => {
		this.setState({ movies, isFetching: false, error: null });
	}

	fetchMoviesError = (error) => {
		this.setState({ isFetching: false, error });
	}

	render() {
		const { movies, isFetching, error } = this.state;

		return (
			<>
				<header className="page-header">
					<h1 className="page-logo">
						Movie Finder
					</h1>
				</header>
				<div className="container">
					<aside className="sidebar">
						<SearchForm 
							fetchMoviesRequest={this.fetchMoviesRequest} 
							fetchMoviesSuccess={this.fetchMoviesSuccess}
							fetchMoviesError={this.fetchMoviesError} 
						/>
					</aside>
					<main className="main-content">
						<MoviesList 
							movies={movies} 
							isFetching={isFetching}
							error={error}
						/>
					</main>
				</div>
			</>
		);
	}
};

export default App;