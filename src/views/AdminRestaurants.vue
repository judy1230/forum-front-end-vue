<template>
  <div class="container py-5">
    <!-- 後台導覽頁籤 AdminNav -->
    <AdminNav />
    <router-link class="btn btn-primary mb-4" :to="{ name: 'admin-restaurant-new'}">
      New Restaurant
    </router-link>
    <!-- 後台餐廳列表 AdminRestaurantsTable -->
		<AdminRestaurantsTable/>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'
import AdminRestaurantsTable from './../components/AdminRestaurantsTable'
export default {
  components: {
		AdminNav,
		AdminRestaurantsTable
  }
}
</script>
