import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import ProductView from './pages/ProductView'
import NotFound from './pages/NotFound'
import CreateProduct from './pages/CreateProduct'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Products />} />
				<Route path='/create' element={<CreateProduct />} />
				<Route path='/product/:id' element={<ProductView />} />

				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
