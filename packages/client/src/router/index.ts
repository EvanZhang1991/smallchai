import { createRouter, createWebHashHistory, RouteRecordRaw, RouteLocationNormalized, RawLocation, Location } from 'vue-router';
import { Component } from 'vue';

import CustomPage from '@/layout/Index.vue';
import Login from '@/views/Login.vue'
import ApplicationList from '@/views/application/list.vue'

// 声明路由配置类型
interface AppRouteConfig extends RouteRecordRaw {
    path: string;
    redirect?: string | Location | RawLocation | (to: RouteLocationNormalized) => RawLocation;
    name?:string;
    component?: Component;
    children?: AppRouteConfig[];
}

// 路由配置数组
const routes: AppRouteConfig[] = [
    {
        path: '/',
        redirect: { name: 'application' },
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/application',
        name: 'application',
        redirect: { name: 'applicationlist' },
        component: CustomPage,
        children: [
            {
                path: '/application/list',
                name: 'applicationlist',
                component: ApplicationList,
                meta:{
                    title: '应用列表'
                }
            }
        ]
    }
];

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
