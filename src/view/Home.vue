<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <teleport to="#endofbody">
    <hr>
    <p>test-app</p>
  </teleport>
</template>

<script>
import HelloWorld from '/@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
