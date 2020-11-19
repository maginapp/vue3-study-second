<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p>sayHi: {{sayHi(count)}}</p>
  <div>
    <h1>Move the #content with the portal component</h1>
    <teleport to="#endofbody">
      <div id="content">
        <p>
          this will be moved to #endofbody.<br />
          Pretend that it's a modal
        </p>
        <p>number: {{ count }}</p>
        <Child />
      </div>
    </teleport>
  </div>
</template>

<script>
import { sayHiJs } from '../utils/test'
import { sayHi } from '../utils/test.ts'

export default {
  name: 'HelloWorld',
  components: {
    Child: { template: "<div>Placeholder</div>" }
  },
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    sayHi(msg) {
      return sayHi(msg)
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  color: #ddd;
}
</style>
