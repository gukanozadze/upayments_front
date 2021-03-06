import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getAllCategories, selectCategoryState } from '../../features/category/category-slice'

interface Props {
	selectedCategories: string[]
	setSelected: any
}
const ProductFilters = ({ selectedCategories, setSelected }: Props) => {
	const dispatch = useAppDispatch()
	const { loading, list } = useAppSelector(selectCategoryState)

	useEffect(() => {
		if (list.length < 1) {
			dispatch(getAllCategories())
		}
	}, [''])

	useEffect(() => {
		if (!loading) {
			setSelected(list.map(c => c.name))
		}
	}, [list])

	const handleChange = (name: string) => {
		if (selectedCategories.includes(name)) {
			// Remove category from array
			setSelected(selectedCategories.filter(c => c !== name))
		} else {
			// Add category name to array
			setSelected([...selectedCategories, name])
		}
	}
	return (
		<div className='flex flex-wrap justify-start gap-y-4 gap-x-8'>
			{list.map(category => {
				return (
					<div className='flex items-center' key={category.id}>
						<input
							className='h-4 w-4 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition  cursor-pointer'
							type='checkbox'
							id={category.name}
							name={category.name}
							checked={selectedCategories.includes(category.name)}
							onChange={() => handleChange(category.name)}
						/>
						<label
							className='form-check-label inline-block text-gray-800 pl-1'
							htmlFor={category.name}
						>
							{category.name}
						</label>
					</div>
				)
			})}
		</div>
	)
}

export default ProductFilters
