<template>
  <div>
    <h2>{{$fnA('全局')}} {{$varA}}</h2>
    <p>{{msg}}</p>
    <div>
      <h3>v-focus3</h3>
      <input :class="{[focusValue.a]: true}" v-if="showFocus" type="text" v-focus3:foo.test="focusValue">
      <div>
        <button @click="focusValue.a = focusValue.a + 1">change value</button>
        <button @click="showFocus = !showFocus">toggle</button>
      </div>
    </div>
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
      hello: 'vue-directive-hello',
      focusValue: { a: 1,b: 2 },
      showFocus: true
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
    focus3: {
      // Directive has a set of lifecycle hooks:
      // called before bound element's parent component is mounted
      beforeMount() {
        console.log(arguments)
        const el = arguments[0]
        el.focus()
      },
      // called when bound element's parent component is mounted
      mounted(el, binding) {
        el.focus()
        console.log(binding)
      },
      // called before the containing component's VNode is updated
      beforeUpdate() {},
      // called after the containing component's VNode and the VNodes of its children // have updated
      updated(el, binding) {
        console.log('updated', binding)
      },
      // called before the bound element's parent component is unmounted
      beforeUnmount() {},
      // called when the bound element's parent component is unmounted
      unmounted() {}
    },
    focus: {
      inserted: function(el) {
        el.focus()
        console.log('focus-inserted')
      }
    },
    focusd: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
        console.log('focusd-inserted')
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