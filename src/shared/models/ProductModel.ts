export interface ProductModel {
	createdAt: string
	name: string
	avatar: string
	id: number
	price: string
	category: number
	description: string
	developerEmail: string
}

export interface ProductForm {
	name: string
	avatar: string
	price: number
	category: string
	description: string
	developerEmail: string
}
