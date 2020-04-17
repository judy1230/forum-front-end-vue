import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
	categories: {
		get() {
			console.log('getToken()', getToken())
			return apiHelper.get('/admin/categories', {
				headers: { Authorization: `Bearer ${getToken()}`}})
		}
	},
	restaurants: {
		create({ formData }) {
			console.log('getToken()', getToken())
			return apiHelper.post('/admin/restaurants', formData, { headers: { Authorization: `Bearer ${getToken()}` } })
		}
	}

}
