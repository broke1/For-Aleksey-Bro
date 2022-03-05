<template>
  <section class="main-container">
    <div class="container">
      <menu-main 
        :lang="lang"
      />
      <lightbox 
        :items="images"
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
        '/images/gallery/1.jpg',
        '/images/gallery/2.jpg',
        '/images/gallery/3.jpg',
        '/images/gallery/4.jpg',
        '/images/gallery/5.jpg',
        '/images/gallery/6.jpg',
        '/images/gallery/7.jpg',
      ]
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

  }
}
</script>


