<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <!-- <ModalSlots :title="`Text from parent`" :text="`<span>Lorem lorem</span>`"/> -->
        <ModalSlots>
          <template #title>
            <h1>Title from slots</h1>
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              vitae dolor iusto quia accusantium animi, aut quae debitis eveniet
              ipsa voluptas quisquam, officia, nemo tempora blanditiis.
              Voluptatem dolorem libero aut.
            </p>
          </template>
          <template v-slot:footer> 
            <p>Footer</p>
          </template>
        </ModalSlots>
      </div>
    </div>
  </div>
</template>

<script>
import ModalSlots from "./components/ModalSlots.vue";
export default {
  name: "App",
  components: {
    ModalSlots,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
