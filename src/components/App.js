import React from 'react';

const App = () => {
	return (
		<>
			<header className="page-header">
				<h1 className="page-logo">
					Movie Finder
				</h1>
			</header>
			<div className="container">
				<aside className="sidebar">
					<form className="search-form" action="#">
						<div className="form-row">
							<input id="title" type="text" />
							<label htmlFor="title">Title</label>							
						</div>
						<div className="form-row">
							<input id="year" type="text" />
							<label htmlFor="year">Year</label>							
						</div>
						<div className="form-row">
							<select id="type" value="">
								<option value="">Type</option>
							</select>
							<label htmlFor="type">Type</label>
						</div>
						<div className="form-row">
							<button className="submit-btn">Search</button>
						</div>
					</form>
				</aside>
				<main className="main-content">

				</main>
			</div>
		</>
	);
};

export default App;