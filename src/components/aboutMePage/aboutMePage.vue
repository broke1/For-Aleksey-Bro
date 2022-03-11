<template>
  <section class="main-container">
    <div class="container">
      <menu-main 
        :lang="lang"
      />
      <div 
        class="about_block"
        :class="{about_block_show: show}"
      >
        <div class="about_img_block">
          <div 
            v-for="img in 4"
            :key="img"
            class="about_img"
            :class="{showImg: curImg == img}"
            :style="{backgroundImage: `url(/images/aboutMe/${img}.jpg)`}"
          />
        </div>
        <div class="about_text">
          <div class="title">
            {{
              lang == "ru" ? 
                "Привет! Я Скарлет" :
                "Hello! I`m Scarlet"
            }}
          </div>
          <div class="text">
            {{
              lang == "ru" ? 
                "Я проффессинальный стилист и я помогу твоим волосам выглядеть сногсшибательно." :
                "I am proffessional stylist and i can help you`r hair look amaizing"
            }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import './aboutMePage.sass'


export default {
  data () {
    return {
      curImg: 1,
      show: false
    }
  },
  computed: {
    lang: function () {
      return this.$store.getters.getLang
    }
  },
  methods: {
    
  },
  mounted() {
    setInterval( () => {
      if (this.curImg < 4) {
        this.curImg = this.curImg + 1
      } else {
        this.curImg = 1
      }
    },3000)
    setTimeout( () => this.show = true,700)
  }
}
</script>


