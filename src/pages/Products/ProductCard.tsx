import React from 'react'
import { Link } from 'react-router-dom'
import { ProductModel } from '../../shared/models/ProductModel'

interface Props {
	product: ProductModel
}

const ProductCard = ({ product }: Props) => {
	return (
		<div className='group relative'>
			<div className='w-full min-h-80 bg-white rounded-md shadow-sm overflow-hidden group-hover:shadow-lg group-hover:opacity-75  lg:h-80 lg:aspect-none'>
				<img
					src={product.avatar}
					alt={product.name}
					className='w-full h-full object-contain hover-scale group-hover:scale-105 transition'
				/>
			</div>
			<div className='mt-2 flex justify-between'>
				<div>
					<h3 className='text-mg text-gray-700'>
						<Link to={`product/${product.id}`}>
							<span data-test={product.name} aria-hidden='true' className='absolute inset-0' />
							{product.name}
						</Link>
					</h3>
					{/* <p className='mt-1 text-sm text-gray-500'>{product.title}</p> */}
				</div>
				<p className='text-lg font-medium text-gray-900'>${product.price}</p>
			</div>
		</div>
	)
}

export default ProductCard
