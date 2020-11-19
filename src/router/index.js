import { createRouter, createWebHistory } from 'vue-router'

import Home from "../view/Home.vue";
// import Setup from "../view/Setup.vue";

export const routes = [
 // { path: '/', name: 'home', component: Home },
  // { path: '/setup', name: 'setup', component: Setup }
  { path: '/', name: 'home', component: () => import('/@/view/Home.vue') },
  { path: '/setup', name: 'setup', component: () => import('../view/Setup.vue') },
  { path: '/directive', name: 'directive', component: () => import('../view/Directive.vue') }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes // (缩写) 相当于 routes: routes
})
