<template>
  <div class="card bg-light mb-3">
    <div class="card-header">{{ profileFavoritedRestaurants.length }} 已收藏餐廳</div>
    <div class="card-body row">
      <div class="ml-2 mt-2" v-for="restaurant in profileFavoritedRestaurants" :key="restaurant.id">
        <img :src="restaurant.image" style="width:50px;"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profileFavoritedRestaurants: {
      type: Array,
      required: true
    }
  }
};
</script>
