import { ref, onMounted,onUpdated } from "vue";
export default function () {
  onMounted(() => {
    console.log("Mounted");
  });
//   onUpdated(() => {
//     console.log("onUpdated");
//   });
  const title = ref("From setup");
  const counter = ref(0);
  const inc = () => {
    counter.value++;
  };
  const oddHandler = (d) => {
    console.log(d);
  };

  return {
    title,
    counter,
    inc,
    oddHandler,
  };
}
