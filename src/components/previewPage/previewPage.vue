<template>
  <section class="main-container">
    <div class="container">
      <div class="title_on_main">
        <div 
          class="title"
          :class="[{title_show: title_show},{title_show_down: title_show_down}]"
        >
          Your hair is your crown
        </div>
      </div>
      <div class="lang_icon_block">
        <div 
          class="lang_icon_item lang_icon_item_ru"
          :class="{lang_icon_show: lang_icon_show}"
          @click="selectLang('ru')"
        >
          <div class="lang_icon lang_icon_ru" />
          <div class="lang_icon_title">
            Русский
          </div>
        </div>
        <div 
          class="lang_icon_item lang_icon_item_uk"
          :class="{lang_icon_show: lang_icon_show}"
          @click="selectLang('uk')"
        >
          <div class="lang_icon lang_icon_uk" />
          <div class="lang_icon_title">
            English
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import './previewPage.sass'


export default {
  data () {
    return {
      title_show: false,
      title_show_down: false,
      lang_icon_show: false,
    }
  },
  methods: {
    selectLang: function(lang) {
      this.$store.commit("setLang", lang)
      this.$router.push({ path: 'mainPage' }) 
    }
  },
  created() {

  },
  mounted() {
    setTimeout( () => {
      this.title_show=true
    },2000)
    setTimeout( () => {
      this.title_show_down=true
    },5000)
    setTimeout( () => {
      this.lang_icon_show=true
    },6000)

  }
}
</script>


