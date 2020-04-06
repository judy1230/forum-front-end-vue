<template>
  <div class="card">
    <div class="card-body">
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <h4>
          <router-link :to="{ name: 'restaurant', params: {id: restaurant.id}}">{{ restaurant.name }}</router-link>
          <!--<a href="#">{{ restaurant.name }}</a>-->
          &nbsp;
          <small>{{ restaurant.Category.name }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
//import moment from 'moment'
import { fromNowFilter } from './../utils/mixins'

export default {
	mixins: [fromNowFilter],
	props:{
    restaurants: {
      type: Array,
      required: true
    }
  },
}
</script>
