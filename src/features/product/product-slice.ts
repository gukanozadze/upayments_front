import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { deleteOneProductCall, getAllProductsCall, getOneProductCall, postProductCall } from './api'
import { ProductModel } from '../../shared/models/ProductModel'

interface ProductState {
	list: ProductModel[]
	entity: ProductModel | null
	status: string
	loading: boolean
}

const initialState: ProductState = {
	list: [],
	entity: null,
	status: '',
	loading: false,
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
	},
	extraReducers: builder => {
		builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
			state.status = 'successs'
			state.loading = false
			state.list = payload
		})
		builder.addCase(getAllProducts.pending, state => {
			state.status = 'pending'
			state.loading = true
		})

		builder.addCase(getOneProduct.fulfilled, (state, { payload }) => {
			state.status = 'successs'
			state.entity = { ...state.entity, ...payload }
			state.loading = false
		})
		builder.addCase(getOneProduct.pending, state => {
			state.status = 'pending'
			state.loading = true
		})

		builder.addCase(postProduct.fulfilled, (state, { payload }) => {
			state.status = 'successs'
			state.list = [...state.list, payload]
		})

		builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
			state.status = 'successs'
			state.list = [...state.list.filter(p => p.id.toString() !== payload)]
		})
	},
})

export const selectProductState = (state: RootState) => state.products
export const selectAllProducts = (state: RootState) => state.products.list
export const selectCurrentProduct = (state: RootState) => state.products.entity
export const selectProductLoading = (state: RootState) => state.products.loading

// Export each reducers function defined in createSlice
export const { resetProductState } = productSlice.actions

// Export default the slice reducer
export default productSlice.reducer
