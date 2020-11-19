<template>
  <div>
    <h2>{{$fnA('全局')}} {{$varA}}</h2>
    <p>{{msg}}</p>
    <input type="text" v-focus>
    <!-- <input-focus/>
    <input-n/> -->
    <button @click="a">not a</button>
    <ul>
      <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
    <msg-s img="img/alt.png" data-text="Your card validation code (CVC) is an extra security feature — it is the last 3 or 4 numbers on the back of your card.">msg-s</msg-s>
    <not-msg-s>msg-s</not-msg-s>
    <div>{{say}}</div>
    <div>{{hello}}</div>
    <div>{{$options.say}}</div>
    <div>{{$options.hello}}</div>
    <hr>
    <div>{{$options.test}}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
// import InputFocus from '/@/components/InputFocus.vue'
// import InputN from '/@/components/InputN.vue'

export default {
  name: 'Directive',
  say: 'options-say',
  hello: 'options-hello',
  test: 'd-test',
  components: {
    // InputFocus,
    // InputN
  },
  data() {
    return {
      name: '梨花',
      say: 'vue-directive-say',
      hello: 'vue-directive-hello'
    }
  },
  setup() {
    const msg = ref('1')
    return {
      msg
    }
  },
  mounted() {
    console.log(this.$options.hello)
    console.log(this.$options.say)
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    },
    focusd: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    },
    focusm: {
      bind(el) {
        console.log('bind')
      },
      inserted() {
        el.focus()
        console.log('inserted')
      },
      update() {
        console.log('update')
      },
      componentUpdated() {
        console.log('componentUpdated')
      },
      unbind() {
        console.log('unbind')
      }
    }
  }
}
</script>