<template>
  <section class="main-container">
    <div class="container">
      <menu-main 
        :lang="lang"
      />
      <lightbox 
        :items="images"
        :class="{ligntbox_conteiner_show: show}"
      />
    </div>
  </section>
</template>

<script>

import './galleryPage.sass'

// gallery plagin

import '@morioh/v-lightbox/dist/lightbox.css'
// import '@fontawesome/fontawesome-free/css/all.css'
// import '@fontawesome/fontawesome-free/js/all.js'

//import Vue from 'vue'
import Lightbox from '@morioh/v-lightbox'


Vue.use(Lightbox)


export default {
  data () {
    return {
      images: [
        
      ],
      countImg: 20, // сколько картинок выводить
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
    setTimeout( () => this.show = true,700)
    this.$store.getters.getImagesGallery().then( answer => {
      answer.json().then( res => {
        this.images = []
        const imagesCur = res.data.filter( img => img.media_type == "CAROUSEL_ALBUM" || img.media_type == "IMAGE")
        imagesCur.forEach( img => {
          if(img.media_type == "CAROUSEL_ALBUM") {
            img.children.data.forEach( anotherImg => {
              if (this.images.length < 20) this.images.push(anotherImg.media_url)
            })
          }
          if (this.images.length < 20) this.images.push(img.media_url)
        })
      })
    })
  }
}
</script>


