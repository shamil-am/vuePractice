<template>
  <div>
    <h1>
      {{ title || "empty" }}
    </h1>
    <input type="text" v-model="title" /> <br />
    {{ charLength }}
    <hr />
    <button @click="toggleText">Toggle</button>
    <p v-if="show">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, modi. Laborum, deleniti nihil harum, veniam dolor quis voluptatem nesciunt, illo inventore ea iusto voluptatum nostrum! Aperiam
      laudantium mollitia ea beatae?
    </p>
    <hr />
    <button @click="addCount">{{ count }} {{ oddOrEven }}</button>
    <!-- watcheffect -->
    <hr />
    <hr />
    <input type="text" v-model="message" />
    <p>{{ userBehavior }}</p>
  </div>
</template>

<script>
import TitleSection from "./composables/TitleSection";
import ModalSection from "./composables/ModalSection";
import CounterButton from "./composables/CounterButton";
import TypingSection from "./composables/TypingSection";
//
export default {
  setup() {
    const { title, charLength } = TitleSection();
    const { show, toggleText } = ModalSection();
    const { count, addCount, oddOrEven } = CounterButton();
    const { message, userBehavior } = TypingSection();
    return { title, charLength, show, toggleText, count, addCount, oddOrEven, message, userBehavior };
  },
};
</script>