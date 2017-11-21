import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/Home'
import Portfolio from '@/components/portfolio/Portfolio'
import Contact from '@/components/contact/Contact'
import About from '@/components/about/About'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/portfolios/:code',
      name: 'Portfolio',
      component: Portfolio
    },{
      path: '/contact',
      name: 'Contact',
      component: Contact
    },{
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
