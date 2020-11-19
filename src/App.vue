<template>
  <!-- <hr>
  <div>
    <router-link v-for="item in routes" :key="item" :to="item">{{item}}</router-link>
  </div>
  <hr>
  <div>
    <router-link v-for="item in list" :key="item" :to="item">{{item}}</router-link>
  </div> -->
  <div>
    <router-link v-for="item in routes" :key="item" :to="item">{{item}}</router-link>
  </div>
  <hr>
  <router-view/>
</template>

<script>
import { reactive } from 'vue'
// import { routes } from '/@/router'

export default {
  name: 'App',
  data() {
    return {
      list: ['/setup', '/']
    }
  },
  setup() {
    const routes = reactive(['/setup', '/', '/directive'])
    return {
      routes
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  margin: 0 10px;
}
</style>
