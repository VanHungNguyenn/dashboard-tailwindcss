import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import {
	Ecommerce,
	Orders,
	Kanban,
	Employees,
	Editor,
	Customers,
	ColorPicker,
	Calendar,
	Area,
	Bar,
	ColorMapping,
	Financial,
	Line,
	Pie,
	Pyramid,
	Stacked,
} from './pages'
import './App.css'
import Root from './components/root'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{ index: true, element: <Ecommerce /> },
			{ path: '/ecommerce', element: <Ecommerce /> },
			{ path: '/orders', element: <Orders /> },
			{ path: '/employees', element: <Employees /> },
			{ path: '/customers', element: <Customers /> },
			{ path: '/kanban', element: <Kanban /> },
			{ path: '/editor', element: <Editor /> },
			{ path: '/color-picker', element: <ColorPicker /> },
			{ path: '/calendar', element: <Calendar /> },
			{ path: '/area', element: <Area /> },
			{ path: '/bar', element: <Bar /> },
			{ path: '/color-mapping', element: <ColorMapping /> },
			{ path: '/financial', element: <Financial /> },
			{ path: '/line', element: <Line /> },
			{ path: '/pie', element: <Pie /> },
			{ path: '/pyramid', element: <Pyramid /> },
			{ path: '/stacked', element: <Stacked /> },
		],
	},
])

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
