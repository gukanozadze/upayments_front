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
		<Disclosure
			as='nav'
			className='bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none'
		>
			{({ open }) => (
				<>
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
								<div className='hidden lg:block lg:ml-10'>
									<div className='flex space-x-4'>
										{pageNavigation.map((item, i) => (
											<NavLink
												key={item.name}
												to={item.to}
												className={({ isActive }) =>
													classNames(
														isActive
															? 'bg-indigo-700 text-white'
															: 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
														'rounded-md py-2 px-3 text-sm font-medium'
													)
												}
											>
												{item.name}
											</NavLink>
										))}
									</div>
								</div>
							</div>
							<div className='flex lg:hidden'>
								{/* Mobile menu button */}
								<Disclosure.Button className='bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='hidden lg:block lg:ml-4'>
								<div className='flex items-center'>
									<a
										href='https://github.com/gukanozadze'
										target='_blank'
										rel='noreferrer'
										className='bg-indigo-600 flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white'
									>
										<span className='sr-only'>Go to my GitHub</span>
									</a>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='lg:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{pageNavigation.map((item, i) => (
								<NavLink
									key={item.name}
									to={item.to}
									className={({ isActive }) =>
										classNames(
											isActive
												? 'bg-indigo-700 text-white'
												: 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
											'block rounded-md py-2 px-3 text-base font-medium'
										)
									}
								>
									{item.name}
								</NavLink>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

export default Header
