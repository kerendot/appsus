import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EmailApp from '@/components/email/EmailApp'
import BookApp from '@/components/book/BookApp'
import PlaceApp from '@/components/place/PlaceApp'

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import BootstrapVue from 'bootstrap-vue';


Vue.use(Element)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/email',
      name: 'EmailApp',
      component: EmailApp
    },
    {
      path: '/book',
      name: 'BookApp',
      component: BookApp
    },

    {
      path: '/place',
      name: 'PlaceApp',
      component: PlaceApp
    }
  ]
})
