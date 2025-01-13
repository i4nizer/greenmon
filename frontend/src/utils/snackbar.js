import { ref } from "vue";


const show = ref(false)
const message = ref('')

/** Sets a message and shows the snackbar */
const pop = (msg = '') => {
    message.value = msg
    show.value = true
    console.log(msg)
}


export default { message, show, pop }