<template>
  <div>
    {{number}}
    {{msg}}
    {{dataRefs}}
    <input type="text" v-model="number">
    <button @click="changeMsg">change</button>
  </div>
</template>

<script>
import { h, ref, reactive, toRefs } from 'vue'
export default {
  name: 'testInput3',
  setup() {
    const number = ref(0)
    const msg = reactive({msg: 'hi'})
    const dataRefs = toRefs(0)
    return {
      msg,
      number,
      dataRefs
    }
  },
  methods: {
    changeMsg() {
      this.msg.msg = this.number
    }
  }
}
</script>