import { h, ref, reactive } from 'vue'

export default {
  name: 'HJ',
  setup() {
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    // Please note that we need to explicitly expose ref value here
    return () => h('div', {name: 'Testdiv'}, [readersNumber.value, book.title, h('hr'),
      h('p', [
        'input',
        h('input')
      ])
    ])
  }
}