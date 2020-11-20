## Application Config


### errorHandler [main.js](/src/main.js)

### warnHandler [main.js](/src/main.js)

### globalProperties [main.js](/src/main.js)

### isCustomElement [main.js](/src/main.js)  [customEle.js](/src/assets/js/customEle.js)
web custom api
[custom elements](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_custom_elements)
[shadow DOM](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM)

### optionMergeStrategies [main.js](/src/main.js)  [Directive.vue](/src/view/Directive.vue)

## Application API


## 问题

* ~~指令未执行~~  `view/Directive` [Directive.vue](/src/view/Directive.vue)

> v3版本指令的钩子函数变化

```js
app.directive('my-directive', {
  // Directive has a set of lifecycle hooks:
  // called before bound element's parent component is mounted
  beforeMount() {},
  // called when bound element's parent component is mounted
  mounted() {},
  // called before the containing component's VNode is updated
  beforeUpdate() {},
  // called after the containing component's VNode and the VNodes of its children // have updated
  updated() {},
  // called before the bound element's parent component is unmounted
  beforeUnmount() {},
  // called when the bound element's parent component is unmounted
  unmounted() {}
})
```

instance: The instance of the component where directive is used.
value: The value passed to the directive. For example in v-my-directive="1 + 1", the value would be 2.
oldValue: The previous value, only available in beforeUpdate and updated. It is available whether or not the value has changed.
arg: The argument passed to the directive, if any. For example in v-my-directive:foo, the arg would be "foo".
modifiers: An object containing modifiers, if any. For example in v-my-directive.foo.bar, the modifiers object would be { foo: true, bar: true }.
dir: an object, passed as a parameter when directive is registered. For example, in the directive