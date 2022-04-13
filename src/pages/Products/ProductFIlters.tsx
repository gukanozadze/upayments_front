import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getAllCategories, selectCategoryState } from '../../features/category/category-slice'
import { filterProducts } from '../../features/product/product-slice'

const ProductFilters = ({ selectedCategories, setSelected }: any) => {
	const dispatch = useAppDispatch()
	const { loading, list } = useAppSelector(selectCategoryState)

	useEffect(() => {
		dispatch(getAllCategories())
	}, [''])

	useEffect(() => {
		if (!loading) {
			setSelected(list.map(c => c.name))
		}
	}, [list])

	const handleChange = (name: string) => {
		let newCategories = []
		if (selectedCategories.includes(name)) {
			// Remove category from array
			newCategories = selectedCategories.filter((c: string) => c !== name)
			setSelected(newCategories)
		} else {
			// Add category to array
			newCategories = [...selectedCategories, name]
			setSelected(newCategories)
		}
	}
	return (
		<div className='flex justify-start gap-8'>
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
							className='form-check-label inline-block text-gray-800 pl-2'
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
