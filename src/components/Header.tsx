/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Link } from 'react-router-dom'
import { CodeIcon } from '@heroicons/react/outline'

const Header = () => {
	return (
		<div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
			<div className='relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25'>
				<div className='px-2 flex items-center lg:px-0'>
					<div className='flex-shrink-0'>
						<Link to='/'>
							<img
								className='block h-8 w-8'
								src='https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg'
								alt='Workflow'
							/>
						</Link>
					</div>
				</div>
				<div className='flex gap-8 items-center'>
					<a href='https://github.com/gukanozadze/upayments_front' target='_blank'>
						<CodeIcon className='block h-6 w-6 text-white' />
					</a>
					<Link
						to='/create'
						className='inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-pointer'
					>
						Create +
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
