import axios from 'axios'

export async function getAllCategoriesCall() {
	const response = await axios.get('/categories')
	return response.data
}
