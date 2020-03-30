<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in restaurantComments"
		:key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
        >
          Delete
        </button>
        <h3>
          <a href="#">
            {{ comment.User.name}}
          </a>
        </h3>
        <p>{{ comment.text}}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt || fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
	filters: {
    fromNow (datetime) {
      if (!datetime) {
        return '-'
      }
      // 使用 moment 提供的 fromNow 方法
      return moment(datetime).fromNow()
    }
  },
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  }
}
</script>
