<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="text-right">
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>
<script>
//import uuid from 'uuid/v4'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  props: {
    restaurantId:{
      type: Number,
      required: true
    }
  },
	data () {
		return {
      text: '',
      isProcessing: false
		}
	},
	methods: {
		async handleSubmit () {
      try{
         if (!this.text) {
          Toast.fire({
            type: 'warning',
            title: '您尚未填寫任何評論'
          })
          return
        }
        this.isProcessing = true
        const { data, statusText } = await usersAPI.comments.create({
          restaurantId: this.restaurantId,
          text: this.text
        })
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        this.$emit('after-create-comment', {
        commentId: data.commentId,
        restaurantId: this.restaurantId,
        text: this.text
        })
        this.isProcessing = false
        this.text = '' // 將表單內的資料清空
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          type: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    },
  }
}
</script>
<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>
