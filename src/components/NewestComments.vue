<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <router-link :to="{ name: 'restaurant', params:{id: comment.Restaurant.id}}" @click="check"
          >{{ comment.Restaurant.name }}</router-link>
          <!-- <a href="#">{{ comment.title}}</a> -->
        </h4>
        <p>{{ comment.text }}</p>by
        <a href="#">{{ comment.User.name }}</a>
        {{ comment.createdAt | fromNow }}
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
//import moment from 'moment'
import { fromNowFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter],
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  method:{
    check () {
      console.log('this.comments',this.comments)
    }
  }
};
</script>
