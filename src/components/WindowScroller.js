import React from 'react';

class WindowScroller extends React.Component {
	componentDidMount() {
		window.addEventListener('scroll', this.props.onWindowScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.onWindowScroll);
	}

	render() {
		return this.props.children;
	}
}

export default WindowScroller;