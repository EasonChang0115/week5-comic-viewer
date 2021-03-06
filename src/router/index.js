import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Reading from '@/pages/Reading';
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/reading/:chapter',
      name: 'Reading',
      component: Reading
    }
  ],
  scrollBehavior() {
    return {x: 0, y: 0};
  }
})
