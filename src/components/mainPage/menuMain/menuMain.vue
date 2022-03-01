<template>
  <section class="menu-container">
    <div 
      v-for="(item,index) in lang == 'ru' ? linksRu : linksEn"
      :key="item"
      class="menu-item"
      @click="index == linksRu.length-1 ? changeLang() : setContent(index)"
    >
      {{ item }}
      <div class="bottom_border" />
    </div>
  </section>
</template>

<script>

import './menuMain.sass'


export default {
  props: {
    lang: null,  
  },
  data () {
    return {
      linksRu: ["Обо мне", "Галерея", "Цены", "Мероприятия", "Контакты", "Ру/Англ"],
      linksEn: ["About me", "Gallery ", "Price list", "Special and privet event", "Contact","Ru/En"],
    }
  },
  methods: {
    changeLang: function() {
      this.$store.commit("setLang", this.lang == "ru" ? "en" : "ru")
    },
    setContent: function(index) {
      const switchObj = {
        0: 'aboutme',
        1: 'gallery',
        2: 'price',
        3: 'event',
        4: 'contact',
      }
      this.$store.commit("setContent",switchObj[index])
    }
  },
  mounted() {


  }
}
</script>


