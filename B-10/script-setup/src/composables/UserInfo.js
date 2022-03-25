import { ref, reactive, watch } from "vue";
export default function () {
  //   const name = ref(null);
  //   const surname = ref(null);
  //   const age = ref(null);
  const user = reactive({
    name: null,
    surname: null,
    age: null,
  });
  const show = () => {
    // alert(`${name.value} ${surname.value} ${age.value}`);
    alert(`${user.name} ${user.surname} ${user.age}`);
    Object.keys(user).forEach((key) => (user[key] = null));
  };
  watch(()=>JSON.parse(JSON.stringify(user)), (n, o) => {
    console.log("o ==>", o);
    console.log("n ==>", n);
  });
  return {
    // name,
    // surname,
    // age,
    user,
    show,
  };
}
