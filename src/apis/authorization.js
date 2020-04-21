import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
	// 帶入需要的參數
	signIn ({ email, password }) {
		// 這裡 return 的會是一個 Promise
		return apiHelper.post('/signin', {
			email,
			password
		})
	},
	signUp({ formData }) {
		console.log('formData13', formData)
		return apiHelper.post('/signup'), formData, { headers: { Authorization: `Bearer ${getToken()}` } } }
}
