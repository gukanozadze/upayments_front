/* eslint-disable no-return-await */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CategoryModel } from '../../shared/models/UserModel'
import { RootState } from '../../store'
import { getAllCategoriesCall } from './api'

interface CategoryState {
	list: CategoryModel[]
	loading: boolean
}
const initialState: CategoryState = {
	list: [],
	loading: false,
}

export const getAllCategories = createAsyncThunk('category/getAllCategories', getAllCategoriesCall)

// Create a slice containing the configuration of the state
const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		resetCategoryState: () => initialState,
	},
	extraReducers: builder => {
		builder.addCase(getAllCategories.pending, state => {
			state.loading = true
		})
		builder.addCase(getAllCategories.fulfilled, (state, { payload }) => {
			state.loading = false
			state.list = [...payload]
		})
	},
})

export const selectCategoryState = (state: RootState) => state.category

// Export each reducers function defined in createSlice
export const { resetCategoryState } = categorySlice.actions

// Export default the slice reducer
export default categorySlice.reducer
