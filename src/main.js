import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
// 定义路由组件.
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes =[
    {path:'/',component: Home},
    {path:'/about',component: About},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

//easy example
/*
import { createApp } from 'vue'
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const app = createApp({ 根组件 })

// 将 store 实例作为插件安装
app.use(store)
*/

createApp(App).use(router).mount('#app')
