import { ref } from "vue";

const ModalSection = () => {
  const show = ref(false);
  const toggleText = () => {
    show.value = !show.value;
  };

  return { show, toggleText };
};

export default ModalSection;
