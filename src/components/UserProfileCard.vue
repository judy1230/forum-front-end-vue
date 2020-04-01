<template>
  <div class="container py-5">
    <div class="card" style="">
      <div class="row ">
        <div class="col-md-4">
          <img :src="profile.image" class="card-img" alt="" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">{{ profile.name }}</h3>
            <h3 class="card-text">{{ profile.email }}</h3>
            <ul class="m-auto">
              <li>{{ profileComments.length }} 已評論的餐廳</li>
              <li>{{ profileFavoritedRestaurants.length }} 收藏的餐廳</li>
              <li>{{ profileFollowings.length }} followings</li>
              <li>{{ profileFollowers.length }} followers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true
		},
    profileComments: {
      type: Array,
      required: true
    },
    profileFavoritedRestaurants: {
      type: Array,
      required: true
    },
    profileFollowings: {
      type: Array,
      required: true
    },
    profileFollowers: {
      type: Array,
      required: true
    }
	},

};
</script>
