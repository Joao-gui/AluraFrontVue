import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home.vue';
import Cadastro from '@/components/cadastro/Cadastro.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [    
    {
      path: '/',
      component: Home
    },
    {
    path: '/cadastro',
    component: Cadastro
    },
    {
      path: '*',
      redirect: '/'
    }
    
  ],
});
