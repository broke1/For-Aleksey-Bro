// натсройки для переадресации на другие компоненты

window.Vue = require('vue')
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',  // этот мод используется для смены компонентов без перезагрузки страницы
  routes: [
    {
      path: '/',  // если страница превью
      component: require('../components/previewPage/previewPage.vue').default, 
    },
    {
      path: '/mainPage',  // если главная страница
      component: require('../components/mainPage/mainPage.vue').default, 
    },
  ],
});


