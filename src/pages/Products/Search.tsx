import { debounce } from 'lodash'
import React from 'react'

const Search = ({ setSearchTerm }: any) => {
	// Products will update after 300 miliseconds of typing the words,
	// Debounced search is usefull when we want to call api after typing words in input
	// We don't want to call API after every typed character instead
	// We ensure that user calls API after writing the full word
	const debouncedSearch = debounce(text => {
		setSearchTerm(text)
	}, 300)

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		debouncedSearch(e.target.value.toLowerCase())
	}

	return (
		<div className='mt-1'>
			<input
				type='text'
				name='search'
				id='search'
				autoComplete='upayments-search'
				className='shadow-lg focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md p-4 mt-4'
				placeholder='Search...'
				onChange={handleChange}
			/>
		</div>
	)
}

export default Search
