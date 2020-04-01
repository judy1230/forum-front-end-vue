<template>
  <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">{{ profileFollowers.length }} followers</div>
    <div class="card-body">
      <div class="ml-2 mt-2" v-for="follower in profileFollowers" :key="follower.id">
        <img :src="follower.image" style="width:50px;" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profileFollowers: {
      type: Array,
      required: true
    }
  }
};
</script>
