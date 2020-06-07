import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.term);
        console.log(this.state.term);
	};
	onInputChange = (event) => {
        this.setState({ term: event.target.value });
        
	};
	render() {
		return (
			<div className='search-bar ui-segment'>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>
						<label>Video search</label>
						<input
							type='text'
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;
