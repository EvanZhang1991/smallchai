import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { Component } from 'vue';

import Index from '../views/Index.vue';
import Login from '../views/Login.vue'
// 声明路由配置类型
interface AppRouteConfig extends RouteRecordRaw {
  path: string,  
  component?: Component;
}

// 路由配置数组
const routes: AppRouteConfig[] = [
  { path: '/', component: Index },
  { path: '/login', component: Login },
];

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
