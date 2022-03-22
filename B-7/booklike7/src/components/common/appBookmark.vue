<template>
  <div class="bookmark">
    <div class="header">
      <h4>{{bookInfo.title}}</h4>
    </div>
    <div class="body">
      <div class="actions">
        <font-awesome-icon icon="heart" />
        <font-awesome-icon icon="bookmark" />
      </div>
      <p><span>{{bookInfo.user_id}}</span>:<span>{{bookInfo.created_at}}</span></p>
    </div>
    <div class="footer">
      <p>{{bookInfo.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bookInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>


<style scoped>
.bookmark {
  border: 1px solid #4747d365;
  border-radius: 1rem;
  display: inline-block;
  padding: 1rem;
}
.bookmark .header {
  border-bottom: 1px solid #80808063;
}
/* .bookmark .body {
  border-bottom: 1px solid #80808063;
} */
</style>