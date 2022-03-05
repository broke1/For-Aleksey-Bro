<template>
  <section class="main-container">
    <div class="container">
      <menu-main 
        :lang="lang"
      />
      <div class="price_block">
        <div 
          v-for="item in prices"
          :key="item.title"
          class="price_card"
        >
          <div class="price_card_title">
            {{ item.title }}
          </div>
          <div class="price_card_text">
            {{ item.location }}
          </div>
          <div class="price_card_text">
            {{ item.time }}
          </div>
          <div class="price_card_text">
            {{ item.device }}
          </div>
          <div class="price_card_text">
            {{ item.water }}
          </div>
          <div class="price_card_price">
            <div class="old_price">
              <div class="price_text">
                {{ item.oldprice }}
              </div>
              <i 
                v-if="item.oldprice"
                class="fa fa-ruble fa-fw" 
              />
              <div 
                v-if="item.oldprice"
                class="old_price_line" 
              />
            </div>
            <div class="price">
              <div class="price_text">
                {{ item.price }}
              </div>
              <i class="fa fa-ruble fa-fw" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import './pricePage.sass'



export default {
  data () {
    return {
      prices: []
    }
  },
  computed: {
    lang: function () {
      this.prices = this.$store.getters.getPrices(this.$store.getters.getLang)
      return this.$store.getters.getLang
    },

  },
  methods: {
    
  },
  mounted() {

  }
}
</script>


