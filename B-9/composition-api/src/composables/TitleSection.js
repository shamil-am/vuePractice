import { ref, computed } from "vue";

const TitleSection = () => {
  const title = ref("");
  const charLength = computed(() => {
    return title.value.length + " character you entered";
  });

  return { title, charLength };
};

export default TitleSection;
