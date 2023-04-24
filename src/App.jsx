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
			{ path: '/charts/area', element: <Area /> },
			{ path: '/charts/bar', element: <Bar /> },
			{ path: '/charts/color-mapping', element: <ColorMapping /> },
			{ path: '/charts/financial', element: <Financial /> },
			{ path: '/charts/line', element: <Line /> },
			{ path: '/charts/pie', element: <Pie /> },
			{ path: '/charts/pyramid', element: <Pyramid /> },
			{ path: '/charts/stacked', element: <Stacked /> },
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
