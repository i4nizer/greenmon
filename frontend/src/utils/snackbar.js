import { ref, watch } from "vue";

/// Handle state and message for the snackbar



const show = ref(false)
const message = ref('')

watch(message, (nv, ov) => console.log(nv))



export default { message, show }