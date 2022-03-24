import { computed, ref } from "vue";

const CounterButton = () => {
  const count = ref(0);
  const addCount = () => {
    count.value++;
  };
  const oddOrEven = computed(() => {
    return count.value % 2 == 0 ? "even" : "odd";
  });

  return {
    count,
    addCount,
    oddOrEven,
  };
};

export default CounterButton;
