<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6 col-lg-4">
      <form class="border border-secondary rounded-3 p-5 mt-5" @submit.prevent="onSave">
        <div class="mb-3">
          <h3>-- Add new --</h3>
        </div>
        <div class="mb-3">
          <label class="form-label">Title</label>
          <input type="text" class="form-control" v-model="userData.title" />
        </div>
        <div class="mb-3">
          <label class="form-label">URL</label>
          <input type="text" class="form-control" v-model="userData.url" />
        </div>
        <div class="mb-3">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model="userData.category_id">
            <option selected>Category</option>
            <option v-for="category in categoryList" :value="category.id" :key="category.id">{{ category.name }}</option>
          </select>
        </div>
        <div class="mb-3 form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style="height: 100px"
            v-model="userData.description"
          ></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
        <div class="mb-3">
          <!--go 1 page back while cancel -->
          <button type="reset" class="btn btn-warning me-1" @click="this.$router.go(-1)">Cancel</button>
          <button type="submit" class="btn btn-success ms-1">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      categoryList: [],
      userData: {
        title: null,
        url: null,
        category_id: null,
        description: null,
      },
    };
  },
  mounted() {
    this.$appAxios.get("/categories").then((category_response) => {
      this.categoryList = category_response?.data || [];
    });
  },
  methods: {
    onSave() {
      let saveData = {
        user_id: this._getCurrentUser.id,
        created_at: Date.now(),
        ...this.userData,
      };
      this.$appAxios.post("/bookmarks", saveData);
      Object.keys(this.userData).forEach((key) => (this.userData[key] = null));
      alert("saved");
      this.$router.push({ name: "HomePage" });
    },
  },
  computed: {
    ...mapGetters(["_getCurrentUser"]),
  },
};
</script>