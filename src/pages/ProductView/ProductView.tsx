/* eslint-disable react/self-closing-comp */
import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getOneProduct, selectProductState } from '../../features/product/product-slice'
import { useParams } from 'react-router-dom'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { convertDate } from '../../shared/shared'

type UrlParams = {
	id: string
}

const ProductView = () => {
	const params = useParams<keyof UrlParams>() as UrlParams
	const dispatch = useAppDispatch()
	const { entity, loading, status } = useAppSelector(selectProductState)

	useEffect(() => {
		dispatch(getOneProduct(params.id))
	}, [''])

	if (!entity || loading) {
		return (
			<Layout title='Back' backButton>
				<div>Loader</div>
			</Layout>
		)
	}

	return (
		<Layout title='Back' backButton>
			<ToastContainer />

			<div className='flex rounded-lg shadow-lg flex-col sm:flex-row pb-6'>
				<div className='max-w-lg mr-auto overflow-hidden lg:max-w-none lg:flex justify-between'>
					<div className='bg-white px-6 py-8 lg:p-12'>
						<h3 className='text-2xl font-extrabold text-gray-900 sm:text-3xl'>{entity.name}</h3>
						<p className='mt-6 text-base text-gray-500'>{entity.description}</p>
						<div className='mt-8'>
							<div className='flex items-center'>
								<h4 className='flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600'>
									Info
								</h4>
								<div className='flex-1 border-t-2 border-gray-200' />
							</div>
							<div className='text-sm text-gray-400'>Created By - {entity.developerEmail}</div>
							<div className='text-sm text-gray-400'>
								Published At - {convertDate(entity.createdAt)}
							</div>
						</div>
					</div>
					<img src={entity.avatar} alt={entity.name} className='w-full lg:w-2/5 object-contain' />
				</div>

				<div className='py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12'>
					<div className='mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900'>
						<span>${entity.price}</span>
						<span className='ml-3 text-xl font-medium text-gray-500'>USD</span>
					</div>
					<div className='mt-6'>
						<div className='rounded-md shadow'>
							<button className='relative flex items-center w-full justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-900'>
								Buy Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default ProductView
