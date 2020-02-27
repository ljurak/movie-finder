import React from 'react';

import SearchForm from './SearchForm';
import MoviesList from './MoviesList';
import WindowScroller from './WindowScroller';
import { MoviesApi } from '../api';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			isFetching: false,
			error: null,
			page: 0,
			pageUrl: null,
			hasMore: false
		};
	}

	fetchMovies = (url, page) => {
		this.fetchMoviesRequest();
		MoviesApi.fetchNextPage(url, page)
			.then(resp => resp.json())
			.then(movies => {
				if (movies.Error) {
					return Promise.reject(movies.Error);
				}
				this.fetchMoviesSuccess(movies.Search, false);
				this.setPage(page);
			})
			.catch(error => this.fetchMoviesError(error));
	}

	fetchMoviesRequest = () => {
		this.setState({ isFetching: true, error: null });
	}

	fetchMoviesSuccess = (movies, shouldReplace) => {
		this.setState(state => ({ 
			movies: shouldReplace ? movies : state.movies.concat(movies), 
			isFetching: false, 
			error: null,  
			hasMore: movies.length === 10 ? true : false 
		}));
	}

	fetchMoviesError = (error) => {
		this.setState(state => ({
			movies: state.page ? state.movies : [], 
			isFetching: false, 
			error, 
			hasMore: false 
		}));
	}

	setPage = (page) => {
		this.setState({ page });
	}

	setPageUrl = (pageUrl) => {
		this.setState({ pageUrl });
	}

	handleScroll = () => {		
		if (window.pageYOffset + window.innerHeight > document.body.scrollHeight - 50) {
			const { isFetching, page, pageUrl, hasMore } = this.state;

			if (hasMore && !isFetching) {
				this.fetchMovies(pageUrl, page + 1);
			}
		}		
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
							setPage={this.setPage}
							setPageUrl={this.setPageUrl}
						/>
					</aside>
					<main className="main-content">
						<WindowScroller onWindowScroll={this.handleScroll}>
							<MoviesList
								movies={movies} 
								isFetching={isFetching}
								error={error}
								onScroll={this.handleScroll}
							/>
						</WindowScroller>
					</main>
				</div>
			</>
		);
	}
};

export default App;