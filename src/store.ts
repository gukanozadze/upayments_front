import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './features/category/category-slice'
import productSlice from './features/product/product-slice'

// Import the previously created search slice

// Create the store, adding the search slice to it
export const store = configureStore({
	reducer: {
		products: productSlice,
		category: categorySlice,
	},
	// do not forget this
	devTools: true,
})

// Export some helper types used to improve type-checking
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
