/* eslint-disable react/self-closing-comp */
import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
	getOneProduct,
	selectProductState,
	deleteProduct,
	resetProductStatus,
} from '../../features/product/product-slice'
import { useParams, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { convertDate } from '../../shared/shared'
import TransparentLoader from '../../components/loaders/TransparentLoader'
import LoadingSvg from './LoadingSvg'

type UrlParams = {
	id: string
}

const ProductView = () => {
	const params = useParams<keyof UrlParams>() as UrlParams
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { entity, loading, deleteLoading, status } = useAppSelector(selectProductState)

	useEffect(() => {
		dispatch(getOneProduct(params.id))
	}, [''])

	const onDeleteClick = () => {
		dispatch(deleteProduct(params.id))
	}

	useEffect(() => {
		if (status === 'success' && !deleteLoading) {
			dispatch(resetProductStatus())
			return navigate(`/`)
		}
	}, [status, deleteLoading])

	if (!entity || loading) {
		return (
			<Layout title='Back' backButton>
				<div className='relative' style={{ minHeight: '360px' }}>
					<TransparentLoader loading={loading} />
				</div>
			</Layout>
		)
	}

	return (
		<Layout title='Back' backButton>
			<div className='flex shadow-lg flex-col sm:flex-row rounded-lg relative'>
				<div className='max-w-lg mr-auto overflow-hidden lg:max-w-none lg:flex justify-between'>
					<div className='px-6 py-8 lg:p-12'>
						<h3 className='text-2xl font-extrabold text-gray-900 sm:text-3xl'>{entity.name}</h3>
						<p className='mt-6 text-base text-gray-500'>{entity.description}</p>
						<div className='mt-8'>
							<div className='flex items-center'>
								<h4 className='flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-indigo-600'>
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
						<button
							onClick={onDeleteClick}
							className='shadow-md flex items-center w-full justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700'
						>
							{deleteLoading ? <LoadingSvg /> : 'Delete'}
						</button>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default ProductView
