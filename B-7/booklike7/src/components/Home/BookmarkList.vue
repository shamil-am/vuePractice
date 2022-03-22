<template>
  <div class="bookmark-list">
    Bookmarklist
    <book-mark v-for="bookmark in bookmarks" :key="bookmark.id" :bookInfo="bookmark"></book-mark>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmarks: [],
    };
  },
  mounted() {
    this.$appAxios.get("/bookmarks").then((bookmark_response) => {
      this.bookmarks = bookmark_response.data || [];
    });
    // !err
    // this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then((result) => {
    //   console.log("Res", result);
    // });
  },
};
</script>