<template>
  <section class="main-container">
    <div class="container">
      <menu-main 
        :lang="lang"
      />
    </div>
  </section>
</template>

<script>

import './galleryPage.sass'


export default {
  data () {
    return {
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


