export const pageNavigation = [
	{ name: 'Products', to: '/' },
]

export const convertDate = (date: Date) => {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	const d = new Date(date)

	const minutes = d.getMinutes()
	const hour = d.getHours()
	const day = d.getDate()

	return `${day} ${monthNames[d.getMonth()]}, ${hour}:${minutes}`
}
