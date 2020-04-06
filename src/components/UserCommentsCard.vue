<template>
  <div class="card bg-light mb-3" >
    <div class="card-header">{{ profileComments.length }} 已評價的餐廳</div>
    <div class="card-body row" >
			<div class="ml-2 mt-2 " v-for="comment in profileComments" :key="comment.Restaurant.id">
				<router-link :to="{name: 'restaurant', params:{id: comment.Restaurant.id}}">
           <img :src="comment.Restaurant.image" style="width:50px;" />
				</router-link>
			</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profileComments: {
      type: Array,
      required: true
    }
  }
};
</script>
