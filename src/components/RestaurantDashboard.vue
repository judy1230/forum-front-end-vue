<template>
<div class="container py-5">
  <div class="col-md-12 mb-3">
    <h1>{{ restaurant.name }}</h1>
    <small class="badge badge-secondary mt-1 mb-3">{{ restaurant.categoryName}}</small>
    <ul>
      <li>有{{ restaurantComments.length }}筆評價</li>
      <li>有{{ restaurant.FavoritedUsers }}人收藏</li>
    </ul>
  </div>
</div>

</template>

<script>
const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Judy Runte",
        "tel": "(918) 827-1962",
        "address": "98138 Elisa Road",
        "opening_hours": "08:00",
        "description": "dicta et cupiditate",
        "image": "https://loremflickr.com/320/240/food,dessert,restaurant/?random=1",
        "createdAt": "2019-06-22T09:00:43.000Z",
        "updatedAt": "2019-06-22T09:00:43.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2019-06-22T09:00:43.000Z",
            "updatedAt": "2019-06-22T09:00:43.000Z"
        },
        "FavoritedUsers": 1,
        "LikedUsers": [],
        "Comments": [
            {
                "id": 3,
                "text": "Quos asperiores in nostrum cupiditate excepturi aspernatur.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2019-06-22T09:00:43.000Z",
                "updatedAt": "2019-06-22T09:00:43.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm",
                    "image": "https://i.imgur.com/XooCt5K.png",
                    "isAdmin": false,
                    "createdAt": "2019-06-22T09:00:43.000Z",
                    "updatedAt": "2019-06-23T01:16:31.000Z"
                }
            },{
                "id": 2,
                "text": "test cupiditate excepturi aspernatur.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2019-06-22T09:00:43.000Z",
                "updatedAt": "2019-06-22T09:00:43.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm",
                    "image": "https://i.imgur.com/XooCt5K.png",
                    "isAdmin": false,
                    "createdAt": "2019-06-22T09:00:43.000Z",
                    "updatedAt": "2019-06-23T01:16:31.000Z"
                }
            },
            {
                "id": 1,
                "text": "111",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2019-06-22T09:00:43.000Z",
                "updatedAt": "2019-06-22T09:00:43.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm",
                    "image": "https://i.imgur.com/XooCt5K.png",
                    "isAdmin": false,
                    "createdAt": "2019-06-22T09:00:43.000Z",
                    "updatedAt": "2019-06-23T01:16:31.000Z"
                }
            }
        ]
    },
    "isFavorited": false,
    "isLiked": false
}

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
        isLiked: false,
        FavoritedUsers: 0
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: []
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId)

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
        FavoritedUsers:dummyData.restaurant.FavoritedUsers
      };
      this.restaurantComments = dummyData.restaurant.Comments
    },
  }
}
</script>
