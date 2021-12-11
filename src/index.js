


window.Vue = require('vue') // подключаем Vue 


import store from './store/index.js' // подключаем файл с настройками хранилища Vuex

import router from './route/index.js'  // подключаем файл с настройками адресации между компонентами

import regeneratorRuntime from "regenerator-runtime";

Vue.component('main-page', require('./components/mainPage/mainPage.vue').default) // Основная страница

import "./sass/main.sass"






// создаем экземпляр vue где подключаем самое главное переадрасицию, визуализацию элемнетов и хранилище
new Vue({
  store: store,
  router: router,
  el: "#app" 
})