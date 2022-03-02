<template>
  <section class="menu-container">
    <div 
      v-for="(item,index) in lang == 'ru' ? linksRu : linksEn"
      :key="item"
      class="menu-item"
      :class="{currentLink: curIndex == index}"
      @click="index == linksRu.length-1 ? changeLang() : movePage(index)"
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
    lang: null
  },
  data () {
    return {
      linksRu: ["Обо мне", "Галерея", "Цены", "Мероприятия", "Контакты", "Ру/Англ"],
      linksEn: ["About me", "Gallery ", "Price list", "Special and privet event", "Contact","Ru/En"],
      switchObj: {
        0: 'aboutme',
        1: 'gallery',
        2: 'price',
        3: 'event',
        4: 'contact',
      },
      curIndex: -1,
    }
  },
  methods: {
    changeLang: function() {
      this.$store.commit("setLang", this.lang == "ru" ? "en" : "ru")
    },
    movePage: function(index) {
      this.$router.push({ path: this.switchObj[index] }) 
      //this.$store.commit("setContent", this.switchObj[index])
    },
    checkCurrentLink: function() {
      Object.values(this.switchObj).forEach( (link,index) => { 
        if (link == document.location.href.split("/").pop()) this.curIndex = index
      })
    }
  },
  mounted() {
    this.checkCurrentLink()
  }
}
</script>


