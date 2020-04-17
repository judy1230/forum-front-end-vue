<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
    v-for="restaurant in restaurants" :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">

            <h5 class="card-title">
              <router-link :to="{ name: 'restaurant', params:{ id:restaurant.id }}" > {{ restaurant.name }}</router-link>
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoritedUsers.length }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>

            <router-link :to="{ name: 'restaurant', params:{ id:restaurant.id }}" class="btn btn-info favorite mr-2">Show</router-link>
          <button
          v-if="restaurant.isFavorited"
          type="button"
          class="btn btn-danger favorite mr-2"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          v-else
          type="button"
          class="btn btn-pprimary favorite mr-2"
          @click.stop.prevent="addFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          type="button"
          class="btn btn-danger like mr-2"
          @click.stop.prevent="deleteLike(restaurant.id)"
        >
          Unlike
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary like mr-2"
          @click.stop.prevent="addLike(restaurant.id)"
        >
          Like
        </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from './../components/NavTabs'
import restaurantsAPI from './../apis/restaurants'
import usersAPI from './../apis/users'
import { Toast } from '../utils/helpers'

export default {
  components: {
    NavTabs,
  },
  data () {
    return {
      restaurants: [],
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods:{
    async fetchRestaurants () {
      try {
        const { data, statusText } = await restaurantsAPI.getRestaurantsTop()
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.restaurants = data.restaurants
      } catch (error) {
          Toast.fire({
            type:'error',
            title: '無法取得熱門餐廳資料, 請稍後再試'
          })
      }

    },
    async addFavorite(restaurantId) {
        console.log('restaurantId',restaurantId)
      try {
        const { data, statusText } = await usersAPI.addFavorite({
          restaurantId
        })
        if (statusText !== "OK" || data.status !== 'success') {
          throw new Error(statusText);
        }
        console.log('this.restaurants',this.restaurants)
        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          }
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount + 1,
            isFavorited: true
          }
        }).sort((a, b) => b.FavoriteCount - a.FavoriteCount)
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法將餐廳加入最愛, 請稍後再試"
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data, statusText } = await usersAPI.deleteFavorite({
          restaurantId
        })
        if (statusText !== "OK" || data.status !== 'success') {
          throw new Error(statusText);
        }
        console.log('this.restaurants',this.restaurants)
        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          }
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount - 1,
            isFavorited: false
          }
        }).sort((a, b) => b.FavoriteCount - a.FavoriteCount)
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法將餐廳取消最愛, 請稍後再試"
        });
      }
    },
    async addLike(restaurantId) {
       try {
        const { data, statusText } = await usersAPI.addLike({
          restaurantId
        });

        if (statusText !== "OK" || data.status !== 'success') {
          throw Error(statusText);
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        };
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法喜愛餐廳, 請稍後再試"
        });
      }
    },
    async deleteLike(restaurantId) {
      try {
        const { data, statusText } = await usersAPI.deleteLike({
          restaurantId
        });

        if (statusText !== "OK" || data.status !== 'success') {
          throw Error(statusText);
        }
        console.log('this.restaurant',this.restaurant)
        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        };
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取消喜愛餐廳, 請稍後再試"
        });
      }
    }
  }
}
</script>
