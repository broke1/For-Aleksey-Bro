
import  services from './services.js'

export default {  // приблизительный объект хранилища, может отличаться от реального
  state: {
    lang: 'ru',
  },
  mutations: {   
    setLang: (state, lang) => {
      state.lang = lang
    },
  },
  actions: {
    
  },
  getters: {
    getLang: (state) => {
      return state.lang
    },
  }
}




 