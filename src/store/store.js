
import  services from './services.js'

export default {  // приблизительный объект хранилища, может отличаться от реального
  state: {
    lang: 'ru',
    content: 'aboutme',
  },
  mutations: {   
    setLang: (state, lang) => {
      state.lang = lang
    },
    setContent: (state, content) => {
      state.content = content
    },
  },
  actions: {
    
  },
  getters: {
    getLang: (state) => {
      return state.lang
    },
    getContent: (state) => {
      return state.content
    },
  }
}




 