import React from 'react'
import Header from './Header'
import Title from './Title'

const defaultProps = {
	backButton: false,
}
type Props = {
	children: any
	title: string
	backButton?: boolean
} & typeof defaultProps

const Layout = ({ title, children, backButton }: Props) => {
	return (
		<div className='min-h-full'>
			<div className='bg-indigo-600 pb-32'>
				<Header />

				<Title title={title} backButton={backButton} />
			</div>

			<main className='-mt-32 '>
				<div className='max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 '>
					<div className='relative bg-gray-50 rounded-lg shadow px-6 py-6 sm:px-12 '>
						<div className='rounded-lg '>{children}</div>
					</div>
				</div>
			</main>
		</div>
	)
}
Layout.defaultProps = defaultProps

export default Layout
