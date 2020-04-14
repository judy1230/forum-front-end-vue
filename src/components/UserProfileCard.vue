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
            <router-link class="btn btn-primary "
            v-if="profile.id === currentUser.id "
            :to="{name:'user-edit', params: {id: currentUser.id}}">
             Edit
            </router-link>
            <!-- <button
              v-if="profile.id === currentUser.id & isAuthenticated"
              class="btn btn-primary">Edit
            </button> -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
	currentUser: {
		id: 1,
		name: '管理者',
		email: 'root@example.com',
		image: ' https://i.pravatar.cc/300',
		isAdmin: true
  },
  isAuthenticated: false
}
export default {
  data () {
    return {
			currentUser: {
				id: -1,
				name: '',
				email: '',
				image: '',
				isAdmin: false
			},
			isAuthenticated: false
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      this.currentUser = {
      ...this.currentUser,
      ...dummyUser.currentUser
    }
    this.isAuthenticated = dummyUser.isAuthenticated
    }
  },
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
