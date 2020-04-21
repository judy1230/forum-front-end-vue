<template>
  <div class="container py-5">
    <form class="w-100" :is-processing="isProcessing"
    @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password1"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          v-model="password2"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit" :disabled="isProcessing">
        {{ isProcessing ? "處理中..." : "Submit" }}
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">Sign In</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "user1@example.com",
      password1: "12345678",
      password2: "12345678",
      isProcessing: false
    }
  },
  methods: {
    // eslint-disable-next-line
    async handleSubmit(e) {
      try {
        this.isProcessing = true
        if (!this.name) {
          Toast.fire({
            type: "warning",
            title: "請填寫名稱"
          });
          return;
        } else if (!this.email) {
          Toast.fire({
            type: "warning",
            title: "請填入email"
          });
          return;
        } else if (!this.password1) {
          Toast.fire({
            type: "warning",
            title: "請填入password1"
          });
          return;
        } else if (!this.password2) {
          Toast.fire({
            type: "warning",
            title: "請填入password2"
          });
          return;
        } else if (this.password1 !== this.password2) {
          Toast.fire({
            type: "warning",
            title: "password1 與 password2 不相同"
          });
          return;
        }
        const form = e.target;
        const formData = new FormData(form);
        console.log('formData129',formData)
        const { data, statusText } = await authorizationAPI.signUp({ formData })
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.$router.push({ name: "signin" });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          type: "error",
          title: "暫時無法加入會員, 請稍後"
        });
      }
    }
  }
};
</script>
