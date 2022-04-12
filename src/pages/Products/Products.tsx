import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { getAllProducts, selectAllProducts, selectProductLoading } from '../../features/product/product-slice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import ProductCard from './ProductCard'

const Products = () => {
	const dispatch = useAppDispatch()
	const products = useAppSelector(selectAllProducts)
	const loading = useAppSelector(selectProductLoading)

	useEffect(() => {
		dispatch(getAllProducts())
	}, [''])

	return (
		<Layout title='Clothes'>
			<div className='overflow-hidden'>
				{loading && products.length < 1 ? (
					<div>Loader...</div>
				) : (
					<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
						{products.map(product => (
							<ProductCard product={product} />
						))}
					</div>
				)}
			</div>
		</Layout>
	)
}

export default Products
