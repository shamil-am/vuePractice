<template>
  <ul class="list-group d-flex overflow-scroll flex-row d-md-block">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
  </ul>
</template>

<style scoped>
.list-group::-webkit-scrollbar {
  display: none;
}
.list-group-item {
  white-space: nowrap;
  margin: 0 0.5rem;
}
</style>