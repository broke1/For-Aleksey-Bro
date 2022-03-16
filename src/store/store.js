
import  services from './services.js'

export default {  // приблизительный объект хранилища, может отличаться от реального
  state: {
    lang: 'ru',
    prices: {
      ru: [
        {
          title: "Бомж",
          location: "Тащитесь в Бутово",
          time: "1.5 часа",
          device: "Деревянные инструменты",
          water: "Вода из под крана",
          oldprice: "",
          price: "15 000" 
        },
        {
          title: "Рабочий",
          location: "Встреча в центре",
          time: "3 часа",
          device: "Стальные инструменты",
          water: "Родниковая вода",
          oldprice: "22 000",
          price: "20 000" 
        },
        {
          title: "Депутат",
          location: "Выезд на дом",
          time: "Весь день",
          device: "Золотые инструменты",
          water: "Святая вода",
          oldprice: "",
          price: "40 000" 
        }
      ],
      en: [
        {
          title: "Homeless",
          location: "Move to Butovo",
          time: "1.5 hour",
          device: "Wood device",
          water: "Very bad water",
          oldprice: "",
          price: "15 000" 
        },
        {
          title: "Working gay",
          location: "Meet in center",
          time: "3 hour",
          device: "Steel device",
          water: "Normal water",
          oldprice: "22 000",
          price: "20 000" 
        },
        {
          title: "Goverment",
          location: "To your place",
          time: "All day",
          device: "Golden device",
          water: "Holy water",
          oldprice: "",
          price: "40 000" 
        }
      ]
    },
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
    getPrices: (state) => {
      return (lang) => {
        return state.prices[lang]
      }
    },
    getImagesGallery: (state) => {
      return () => {
        return new Promise((resolve) => {
          const response = services.getImagesGallery()
          response.then( res => {
            if (res.status == 200){ 
              resolve(res)
            } else {
              resolve('failed')
            }
          })

        })

        // const response = services.getImagesGallery()
        // response.then( answer => {
        //   answer.json().then( res => {
        //     return res
        //   })
        // })

      }
    },
  }
}




 