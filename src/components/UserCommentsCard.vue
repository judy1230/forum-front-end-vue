<template>
  <div class="card bg-light mb-3" >
    <div class="card-header">{{ profileComments.length }} 以平價的餐廳</div>
    <div class="card-body row" >
			<div class="ml-2 mt-2 " v-for="comment in profileComments" :key="comment.Restaurant.id">
        <img :src="comment.Restaurant.image" style="width:50px;" />
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
