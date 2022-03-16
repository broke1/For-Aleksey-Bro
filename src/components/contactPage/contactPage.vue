<template>
  <section class="main-container">
    <div class="container">
      <menu-main 
        :lang="lang"
      />
      <div 
        class="contacts_block"
        :class="{contacts_block_show: show}"
      >
        <a 
          v-for="item in contacts"
          :key="item.icon"
          :href="item.link" 
          target="_blank"
          class="contact_link"
        >
          <div class="contact">
            <div class="contact_icon">
              <i :class="`fa fa-${item.icon} fa-fw`" />
            </div>
            <div class="contact_text">
              {{ item.text }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>

import './contactPage.sass'



export default {
  data () {
    return {
      contacts: [
        {
          icon: "phone",
          text: "+1 (424) 382-3685"
        },
        {
          link: "https://wa.me/14243823685",
          icon: "whatsapp",
          text: "+1 (424) 382-3685"
        },
        {
          link: "https://www.instagram.com/sash.hair/",
          icon: "instagram",
          text: "@sash.hair"
        },
      ],
      show: false,
    }
  },
  computed: {
    lang: function () {
      return this.$store.getters.getLang
    },

  },
  methods: {
    
  },
  mounted() {
    setTimeout( () => this.show = true,700)
  }
}
</script>


