import { apiHelper } from "../utils/helpers"
const getToken = () => localStorage.getItem('token')

export default {
	getCurrentUser() {
		return apiHelper.get(`/get_current_user`, { headers: { Authorization: `Bearer ${getToken()}` }})

	},
	get({ userId = '' } = {}) {
		return apiHelper.get(`/users/${userId}`)
	},
	update({ userId, formData }) {
		return apiHelper.put(`/users/${userId}`, formData)
	},
	getTopUsers() {
		return apiHelper.get('/users/top')
	},
	addFavorite({ restaurantId }) {
		return apiHelper.post(`/favorite/${restaurantId}`)
	},
	deleteFavorite({ restaurantId }) {
		return apiHelper.delete(`/favorite/${restaurantId}`)
	},
	addLike({ restaurantId }) {
		return apiHelper.post(`/like/${restaurantId}`)
	},
	deleteLike({ restaurantId }) {
		return apiHelper.delete(`/like/${restaurantId}`)
	},
	addFollowing({ userId }) {
		return apiHelper.post(`/following/${userId}`)
	},
	deleteFollowing({ userId }) {
		return apiHelper.delete(`following/${userId}`)
	},
	comments: {
		create({ RestaurantId, text }) {
			return apiHelper.post(`/comments`, { RestaurantId,text }, { headers: { Authorization: `Bearer ${getToken()}` } })
		},
		delete({ commentId }) {
			return apiHelper.delete(`/comments/${commentId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
		}
	}

}

