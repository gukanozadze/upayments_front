/* eslint-disable no-return-await */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface CategoryState {
	list: any[]
	loading: boolean
}
const initialState: CategoryState = {
	list: [],
	loading: false,
}

// Create a slice containing the configuration of the state
const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		resetCategoryState: () => initialState,
	},
})

export const selectCategoryState = (state: RootState) => state.category
// Export each reducers function defined in createSlice
export const { resetCategoryState } = categorySlice.actions

// Export default the slice reducer
export default categorySlice.reducer
