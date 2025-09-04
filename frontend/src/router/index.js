import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登录页组件（StartPage）
import StartPage from '../views/StartPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',  // 登录页路由（单独页面）
    name: 'Login',
    component: StartPage,
    meta: {
      isPublic: true  // 标记为公开页面（无需登录即可访问）
    }
  },
  {
    path: '/app',  // 主应用路由（App.vue渲染的界面）
    name: 'AppMain',
    component: MainInterface,
    meta: {
      requiresAuth: true  // 标记为需要登录才能访问
    }
  }
]

const router = new VueRouter({
  mode: 'history',  // 去除URL中的#
  base: process.env.BASE_URL,
  routes
})

// 路由守卫：未登录用户无法访问主界面
router.beforeEach((to, from, next) => {
  // 判断目标页面是否需要登录
  if (to.meta.requiresAuth) {
    // 实际项目中可替换为检查localStorage中的登录状态
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (isLoggedIn) {
      next()  // 已登录，允许访问
    } else {
      next('/')  // 未登录，跳回登录页
    }
  } else {
    next()  // 公开页面，直接访问
  }
})

export default router
    
