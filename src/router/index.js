import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TranslationsList from '../views/TranslationsList'
import ShowTranslation from '../views/ShowTranslation'
import TranslationInfo from '../views/TranslationInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/translation/:author',
    name: 'ShowTranslation',
    component: ShowTranslation,
  },
  {
    path: '/translations',
    name: 'Translations',
    component: TranslationsList,
  },
  {
    path: '/translation/:author',
    name: 'TranslationInfo',
    component: TranslationInfo,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
