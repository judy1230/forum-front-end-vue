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
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import restaurantsAPI from "./../apis/restaurants";

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
      //currentUser: dummyUser.currentUser,
      restaurantComments: []
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);
      try {
        const { data, statusText } = await restaurantsAPI.getRestaurant({
          restaurantId
        });

        if (statusText !== "OK") {
          throw new Error(statusText);
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
          isLiked: data.isLiked,
          FavoritedUsers: data.restaurant.FavoritedUsers.length
        };
        this.restaurantComments = data.restaurant.Comments;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    }
  },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>
