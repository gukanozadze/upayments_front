import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import ListLoader from '../../components/loaders/ListLoader'
import { getAllProducts, selectAllProducts, selectProductLoading } from '../../features/product/product-slice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import ProductCard from './ProductCard'
import ProductFilters from './ProductFIlters'

const Products = () => {
	const dispatch = useAppDispatch()
	const [selectedCategories, setSelected] = useState<string[]>([])
	const products = useAppSelector(selectAllProducts)
	const loading = useAppSelector(selectProductLoading)

	useEffect(() => {
		dispatch(getAllProducts())
	}, [''])

	if (loading) {
		return (
			<Layout title='Store'>
				<ListLoader />
			</Layout>
		)
	}

	return (
		<Layout title='Store'>
			<ProductFilters selectedCategories={selectedCategories} setSelected={setSelected} />
			<div className='mt-6 grid grid-cols-1 gap-y-12 gap-x-12 sm:grid-cols-2 lg:grid-cols-4'>
				{products
					.filter(({ category }) => selectedCategories.includes(category))
					.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</Layout>
	)
}

export default Products
