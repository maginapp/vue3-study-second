import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import './assets/js/customEle'

import { router } from '/@/router'

const app =createApp(App)

app.use(router).mount('#app')

// app.directive('focus', {
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })

app.config.errorHandler = (err, vm, info) => {
  console.log(err)
  console.log('errorHandler', info)
}

app.config.warnHandler = (msg, vm, trace) => {
  console.log(msg)
  console.log('trace', trace)
}

app.config.globalProperties.$varA = 'var'
app.config.globalProperties.$fnA = (msg) => msg

app.config.isCustomElement = tag => tag.startsWith('msg-')

app.config.optionMergeStrategies.hello = (toVal, fromVal, vm) => {
  return `hello! ${fromVal}`
}

app.config.optionMergeStrategies.say = (toVal, fromVal, vm) => {
  console.log(`app.config.optionMergeStrategies.say toVal`, toVal)
  console.log(`app.config.optionMergeStrategies.say fromVal`, fromVal)
  return `say: ${fromVal || toVal} ${vm.name}`
}

// toVal 上层 fromVal 当前
app.config.optionMergeStrategies.test = (toVal, fromVal, vm) => {
  console.log(`test`, toVal, fromVal)
  return  toVal || fromVal
}

app.mixin({
  hello: 'Vue',
  say: 'Vue',
  name: '李华',
  test: 'test'
})