import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { deleteOneProductCall, getAllProductsCall, getOneProductCall, postProductCall } from './api'
import { ProductModel } from '../../shared/models/ProductModel'

interface ProductState {
	products: ProductModel[]
	list: ProductModel[]
	entity: ProductModel | null
	status: string
	loading: boolean
	postLoading: boolean
	deleteLoading: boolean
}

const initialState: ProductState = {
	products: [],
	list: [],
	entity: null,
	status: '',
	loading: false,
	postLoading: false,
	deleteLoading: false,
}

export const getAllProducts = createAsyncThunk('products/getAllProducts', getAllProductsCall)
export const getOneProduct = createAsyncThunk('products/getOneProduct', getOneProductCall)
export const postProduct = createAsyncThunk('products/postProduct', postProductCall)
export const deleteProduct = createAsyncThunk('products/deleteOneProduct', deleteOneProductCall)

// Create a slice containing the configuration of the state
const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		resetProductState: () => initialState,
		filterProducts: (state, { payload: selectedCategories }) => {
			state.list = [...state.products.filter(product => selectedCategories.includes(product.category))]
		},
	},
	extraReducers: builder => {
		builder.addCase(getAllProducts.pending, state => {
			state.loading = true
		})
		builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
			state.loading = false
			state.list = payload
			state.products = payload
		})

		builder.addCase(getOneProduct.pending, state => {
			state.loading = true
		})
		builder.addCase(getOneProduct.fulfilled, (state, { payload }) => {
			state.entity = { ...state.entity, ...payload }
			state.loading = false
		})

		builder.addCase(postProduct.pending, state => {
			state.status = 'pending'
			state.postLoading = true
		})
		builder.addCase(postProduct.fulfilled, (state, { payload }) => {
			state.status = 'successs'
			state.postLoading = false
			state.list = [...state.list, payload]
		})

		builder.addCase(deleteProduct.pending, state => {
			state.status = 'pending'
			state.deleteLoading = true
		})
		builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
			state.status = 'successs'
			state.deleteLoading = false
			state.list = [...state.list.filter(p => p.id.toString() !== payload)]
		})
	},
})
export const selectProductState = (state: RootState) => state.products
export const selectAllProducts = (state: RootState) => state.products.list
export const selectCurrentProduct = (state: RootState) => state.products.entity
export const selectProductLoading = (state: RootState) => state.products.loading

// Export each reducers function defined in createSlice
export const { resetProductState, filterProducts } = productSlice.actions

// Export default the slice reducer
export default productSlice.reducer
