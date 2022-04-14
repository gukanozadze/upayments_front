import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout'
import TransparentLoader from '../../components/loaders/TransparentLoader'
import { postProduct, resetProductStatus, selectProductState } from '../../features/product/product-slice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import Select from 'react-select'
import { getAllCategories, selectCategoryState } from '../../features/category/category-slice'

const CreateProduct = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { postLoading, status } = useAppSelector(selectProductState)

	const [name, setName] = useState('Guka T-Shirt')
	const [category, setCategory] = useState('')
	const [description, setDescription] = useState('BIG DESCRIPTION')
	const [price, setPrice] = useState(99)
	const [avatar, setAvatar] = useState('https://cf.shopee.ph/file/de6128223b8d2b854a1567ed335f2204')
	const [developerEmail, setDeveloperEmail] = useState('gukanozadze@gmail.com')

	const { list: categoryList } = useAppSelector(selectCategoryState)

	useEffect(() => {
		if (categoryList.length < 1) {
			dispatch(getAllCategories())
		}
	}, [categoryList])

	const onSubmit = (e: any) => {
		e.preventDefault()
		const data = {
			name,
			description,
			category: category || categoryList[0].name,
			price: Number(price),
			avatar,
			developerEmail,
		}

		dispatch(postProduct(data))
	}

	const categoryOptions = categoryList.map(({ name }) => {
		return { value: name, label: name }
	})

	useEffect(() => {
		if (status === 'success' && !postLoading) {
			dispatch(resetProductStatus())
			return navigate(`/`)
		}
	}, [status, postLoading])

	return (
		<Layout title='Back' backButton>
			<TransparentLoader loading={postLoading} />

			<form className='space-y-6' onSubmit={onSubmit}>
				<div className='space-y-6 sm:space-y-5 mb-4 md:mb-12'>
					<div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5'>
						<label
							htmlFor='name'
							className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
						>
							Name
						</label>
						<div className='mt-1 sm:mt-0 sm:col-span-2'>
							<input
								required
								type='text'
								name='name'
								id='name'
								value={name}
								onChange={e => setName(e.target.value)}
								className='max-w-lg block w-full shadow-sm border p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
							/>
						</div>
					</div>

					<div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
						<label
							htmlFor='price'
							className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
						>
							Price
						</label>
						<div className='mt-1 sm:mt-0 sm:col-span-2'>
							<input
								required
								type='number'
								name='price'
								id='price'
								value={price}
								onChange={e => setPrice(e.target.valueAsNumber)}
								className='max-w-lg block w-full shadow-sm border p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
							/>
						</div>
					</div>

					<div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
						<label
							htmlFor='category'
							className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
						>
							Category
						</label>
						<div className='mt-1 sm:mt-0 sm:col-span-2'>
							{categoryList.length > 0 ? (
								<Select
									name='select-category'
									options={categoryOptions}
									defaultValue={{
										value: categoryList[0].name,
										label: categoryList[0].name,
									}}
									onChange={option => option && setCategory(option.label)}
									className='max-w-lg block w-full shadow-sm sm:max-w-xs sm:text-sm z-0'
								/>
							) : (
								<div>Loading categories...</div>
							)}
						</div>
					</div>

					<div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
						<label
							htmlFor='description'
							className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
						>
							Description
						</label>
						<div className='mt-1 sm:mt-0 sm:col-span-2'>
							<textarea
								required
								name='description'
								id='description'
								value={description}
								onChange={e => setDescription(e.target.value)}
								className='max-w-lg block w-full shadow-sm border p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
							/>
						</div>
					</div>

					<div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
						<label
							htmlFor='avatar'
							className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
						>
							Avatar
						</label>
						<div className='mt-1 sm:mt-0 sm:col-span-2'>
							<input
								required
								type='text'
								name='avatar'
								id='avatar'
								value={avatar}
								onChange={e => setAvatar(e.target.value)}
								className='max-w-lg block w-full shadow-sm border p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
							/>
						</div>
					</div>

					<div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
						<label
							htmlFor='developerEmail'
							className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
						>
							Developer Email
						</label>
						<div className='mt-1 sm:mt-0 sm:col-span-2'>
							<input
								required
								type='string'
								name='developerEmail'
								id='developerEmail'
								value={developerEmail}
								onChange={e => setDeveloperEmail(e.target.value)}
								autoComplete='developerEmail'
								className='max-w-lg block w-full shadow-sm border p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
							/>
						</div>
					</div>
				</div>

				<button
					type='submit'
					name='create'
					className='shadow-md flex items-center w-full justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700'
					disabled={postLoading}
				>
					Create
				</button>
			</form>
		</Layout>
	)
}

export default CreateProduct
