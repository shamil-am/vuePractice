<template>
  <div class="card">
    <div class="card-header">
      <!-- <h2 class="title"> -->
      <slot name="title" />
      <!-- </h2> -->
    </div>
    <div class="car-body p-2">
      <div class="text">
        <slot name="text" />
      </div>
    </div>
    <div class="card-footer py-2">
      <slot name="footer"/>
      <button class="btn btn-success me-2" @click="accept">Accept</button>
      <button class="btn btn-danger ms-2" @click="iqnore">Iqnore</button>
    </div>
  </div>
</template>

<script>
export default {
  // props:["title","text"],
  methods: {
    accept() {
      alert("accepted!");
    },
    iqnore() {
      alert("iqnored!");
    },
  },
};
</script>