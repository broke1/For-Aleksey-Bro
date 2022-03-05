


window.Vue = require('vue') // подключаем Vue 


import store from './store/index.js' // подключаем файл с настройками хранилища Vuex

import router from './route/index.js'  // подключаем файл с настройками адресации между компонентами

import regeneratorRuntime from "regenerator-runtime";

//Vue.component('preview-page', require('./components/previewPage/previewPage.vue').default) // Основная страница

Vue.component('menu-main', require('./components/menuMain/menuMain.vue').default) // меню для основной страницы

import "./sass/main.sass"

import "./js/fontawessome"


// создаем экземпляр vue где подключаем самое главное переадрасицию, визуализацию элемнетов и хранилище
new Vue({
  store: store,
  router: router,
  el: "#app" 
})