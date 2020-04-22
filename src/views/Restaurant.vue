<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurant-comments="restaurantComments"
    @after-delete-comment="afterDeleteComment" />
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id="restaurant.id"
    @after-create-comment="afterCreateComment" />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail"
import RestaurantComments from "./../components/RestaurantComments"
import CreateComment from "./../components/CreateComment"
import restaurantsAPI from './../apis/restaurants'
import Toast from './../utils/helpers'


const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}
export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: []
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  beforRouteUpdate (to, from, next){
    const { id: restaurantId } = to.params
    this.fetchRestaurant(restaurantId)
    next()
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId)
      try {
        const {data, statusText} = await restaurantsAPI.getRestaurant({
          restaurantId
        })

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.restaurant = {
        id: data.restaurant.id,
        name: data.restaurant.name,
        categoryName: data.restaurant.Category.name,
        image: data.restaurant.image,
        openingHours: data.restaurant.opening_hours,
        tel: data.restaurant.tel,
        address: data.restaurant.address,
        description: data.restaurant.description,
        isFavorited: data.isFavorited,
        isLiked: data.isLiked
      };
      this.restaurantComments = data.restaurant.Comments
      }catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }

    },
    afterDeleteComment (commentId) {
      this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    afterCreateComment (payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
      console.log('this.restaurantComments',this.restaurantComments)
    }
  }
};
</script>
