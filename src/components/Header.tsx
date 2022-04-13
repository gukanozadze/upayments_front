import React, { Fragment } from 'react'
import { pageNavigation } from '../shared/shared'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, NavLink } from 'react-router-dom'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

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
				<div className=''>
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
