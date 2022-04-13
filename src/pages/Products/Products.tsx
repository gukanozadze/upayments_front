import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import ListLoader from '../../components/loaders/ListLoader'
import { getAllProducts, selectAllProducts, selectProductLoading } from '../../features/product/product-slice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import ProductCard from './ProductCard'
import ProductFilters from './ProductFIlters'

const Products = () => {
	const dispatch = useAppDispatch()
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
			{products.length > 0 && <ProductFilters />}
			<div className='mt-6 grid grid-cols-1 gap-y-12 gap-x-12 sm:grid-cols-2 lg:grid-cols-4'>
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</Layout>
	)
}

export default Products
