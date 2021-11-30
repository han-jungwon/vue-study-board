/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Board from '../components/Board.vue'
import BoardDetail from '../components/BoardDetail.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/board/:bid', component: Board, children: [
        { path: 'detail/:did', component: BoardDetail }
      ]},
    { path: '*', component: NotFound }
  ]
})

export default router