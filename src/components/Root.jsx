import React from 'react'

import { FiSettings } from 'react-icons/fi'
import { Navbar, Footer, Sidebar, ThemeSettings } from './'
import { Outlet } from 'react-router-dom'

const Root = () => {
	const activeMenu = true

	return (
		<div className='flex relative dark:bg-main-dark-bg'>
			<div className='fixed right-4 bottom-4' style={{ zIndex: 1000 }}>
				<button
					type='button'
					className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
					style={{ backgroundColor: 'blue', borderRadius: '50%' }}
				>
					<FiSettings />
				</button>
			</div>
			{activeMenu ? (
				<div className='w-72 fixed sidebar dark:bg-main-dark-bg bg-white'>
					<Sidebar />
				</div>
			) : (
				<div className='w-0 dark:bg-main-dark-bg'>
					<Sidebar />
				</div>
			)}
			<div
				className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
					activeMenu ? ' md:ml-72' : 'flex-2'
				}`}
			>
				<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
					<Navbar />
				</div>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	)
}

export default Root
