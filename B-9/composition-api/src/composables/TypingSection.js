import { ref, watchEffect } from "vue";

const TypingSection = () => {
  const message = ref("");
  const userBehavior = ref("online");
  watchEffect((onInvalidate) => {
    if (message.value.length > 0) {
      userBehavior.value = "typing";
      let pid = setTimeout(() => {
        userBehavior.value = "online";
      }, 1500);
      onInvalidate(() => clearTimeout(pid));
    }
  });

  return {
    message,
    userBehavior,
  };
};

export default TypingSection;
