import React from 'react';

const Search = ({searchfield,search}) => {
return (
	<div>
	<input type='search' className='searchbx' placeholder='Search Player'
	onChange = {search}
	/>
	</div>
	);
	
}

export default Search;