import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', icon: 'home', auth: true }
      }
    ]
  },
  {
    path: '/user',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'user',
        component: () => import('@/views/user/index.vue'),
        meta: { title: '用户管理', icon: 'user', auth: true }
      }
    ]
  },
  {
    path: '/article',
    component: () => import('@/layout/index.vue'),
    redirect: '/article',
    meta: {title: '文章管理'},
    children: [
      {
        path: '',
        name: 'article',
        component: () => import('@/views/article/index.vue'),
        meta: { title: 'blog/笔记/日记', icon: 'article', auth: true }
      },
      {
        path: 'add',
        name: 'add',
        component: () => import('@/views/article/add.vue'),
        meta: { title: '添加', icon: '', auth: true }
      }
    ]
  },
  {
    path: '/resource',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'resource',
        component: () => import('@/views/resource/index.vue'),
        meta: { title: '资源管理', icon: 'resource', auth: true }
      }
    ]
  },
  {
    path: '/message',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'message',
        component: () => import('@/views/message/index.vue'),
        meta: { title: '消息管理', icon: 'message', auth: true }
      }
    ]
  },
  {
    path: '/project',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'project',
        component: () => import('@/views/project/index.vue'),
        meta: { title: '项目管理', icon: 'project', auth: true }
      }
    ]
  },
  {
    path: '/logs',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'logs',
        component: () => import('@/views/log/index.vue'),
        meta: { title: '日志管理', icon: 'log', auth: true }
      }
    ]
  },
  {
    path: '/setting',
    component: () => import('@/layout/index.vue'),
    redirect: '/setting/page',
    meta: {title: '系统设置'},
    children: [
      {
        path: 'page',
        name: 'page',
        component: () => import('@/views/setting/index.vue'),
        meta: { title: '页面设置', icon: 'setting', auth: true }
      },
      {
        path: 'dictionary',
        name: 'dictionary',
        component: () => import('@/views/setting/dictionary.vue'),
        meta: { title: '字典设置', icon: 'dictionary', auth: true }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: 'login', icon: 'login', hidden: true, }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/NotFound/index.vue'),
    meta: { title: '404', icon: '404', hidden: true, }
  },
  {
    path: '/:path(.*)*',
    redirect: '/404',
    meta: { hidden: true, },
  }
]
export default routes