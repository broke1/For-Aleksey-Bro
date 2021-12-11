<template>
  <section class="main-container">
    <div class="container">
      <div class="title_on_main">
        <div 
          class="title"
          :class="{title_show: title_show}"
        >
          Брат Алексея
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import './MainPage.sass'


export default {
  data () {
    return {
      title_show: false,
    }
  },
  methods: {

  },
  created() {

  },
  mounted() {
    setTimeout( () => {
      this.title_show=true
    },2000)
  }
}
</script>


