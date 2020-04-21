<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input type="text" v-model="newCategoryName" class="form-control" placeholder="新增餐廳類別..." />
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="createCategory"
            :disabled="isProcessing"
          >{{ isProcessing ? "處理中..." : "新增" }}</button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">{{ category.id }}</th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">{{ category.name }}</div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              class="cancel"
              @click.stop.prevent="handleCancel(category.id)"
            >✕</span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >Edit</button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="updateCategory({categoryId: category.id, name: category.name })"
            >Save</button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    AdminNav
  },
  // 3. 定義 Vue 中使用的 data 資料
  data() {
    return {
      newCategoryName: "",
      categories: [],
      isProcessing: false
    };
  },
  // 5. 調用 `fetchCategories` 方法
  created() {
    this.fetchCategories();
  },
  methods: {
    // 4. 定義 `fetchCategories` 方法，把 `dummyData` 帶入 Vue 物件
    async fetchCategories() {
      //在每一個categor中都添加一個isEditing屬性
      try {
        const { data, statusText } = await adminAPI.categories.get()
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.categories = data.categories.map(category => ({
          ...category,
          isEditing: false
        }));
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法顯示餐廳類別總類, 請稍後"
        });
      }
    },
    async createCategory() {
      try {
        this.isProcessing = true;
        if (!this.newCategoryName) {
          Toast.fire({
            type: "warning",
            title: "請填寫餐廳類別"
          });
          return;
        }
        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName
        });
        if (data.status !== "success") {
          throw new Error(data.status);
        }
        this.newCategorName = ""; //清空原本欄位的內容
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          type: "error",
          titile: "無法建立餐廳，請稍後再試"
        });
      }
    },
    async deleteCategory(categoryId) {
      try {
        const { data, statusText } = await adminAPI.categories.delete({
          categoryId
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(data.status);
        }
        this.categories = this.categories.filter(
          category => category.id !== categoryId
        );
      } catch (error) {
        Toast.fire({
          type: "error",
          titile: "無法刪除餐廳，請稍後再試"
        });
      }
    },
    async toggleIsEditing(categoryId) {
      try {
        this.categories = this.categories.map(category => {
          if (category.id !== categoryId) return category;
          /// 如果迴圈中的 category.id 是欲修改的 categoryId 則改變 isEditing 的值
          return {
            ...category,
            nameCached: category.name,
            isEditing: !category.isEditing
          };
        });
      }catch (error) {
        Toast.fire({
          type: "error",
          titile: "無法編輯餐廳，請稍後再試"
        });
      }
    },
    async updateCategory({ categoryId, name }) {
      try {
        console.log('categoryId',categoryId)
        console.log('updatedName',name)
        const { data, statusText } = await adminAPI.categories.update({
          categoryId,
          name
        })
        this.toggleIsEditing(categoryId);
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "暫時無法更新類別,請稍後再試"
        });
      }
    },
    handleCancel(categoryId) {
      console.log("categoryId:", categoryId);
      this.categories = this.categories.map(category => {
        if (category.id !== categoryId) {
          return category;
        }

        // 將原本的類別名稱還回去
        return {
          ...category,
          name: category.nameCached
        };
      });
      this.toggleIsEditing(categoryId);
    }
  }
};
</script>
<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
