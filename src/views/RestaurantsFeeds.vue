<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants'
import NewestComments from './../components/NewestComments'
import restaurantFeedsAPI from "./../apis/restaurantFeed"
import { Toast } from './../utils/helpers'



export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data () {
    return  {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    async fetchFeeds() {
      try{
        const { data, statusText } = await restaurantFeedsAPI.getNewestRestaurants()

        if (statusText !== "OK") {
          throw new Error(statusText)
        }
        this.restaurants = data.restaurants
        this.comments = data.comments
      } catch (error) {
        Toast.fire({
          type:'warn',
          title:'無法取得餐廳資料, 請稍後再試'
        })
      }
    }
  }
}
</script>
