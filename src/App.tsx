import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import ProductView from './pages/ProductView'
import NotFound from './pages/NotFound'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Products />} />
				<Route path='/product/:id' element={<ProductView />} />

				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
