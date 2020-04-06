<template>
  <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">{{ profileFollowings.length }} followings</div>
    <div class="card-body row">
      <div class="ml-2 mt-2" v-for="following in profileFollowings" :key="following.id">
				<router-link :to="{name: 'user', params:{id: following.id}}"
				>
				<img :src="following.image" style="width:50px;"  />
				</router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profileFollowings: {
      type: Array,
      required: true
    }
  }
};
</script>
