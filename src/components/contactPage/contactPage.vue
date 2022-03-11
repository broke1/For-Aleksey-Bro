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
          link: "",
          icon: "paper-plane",
          text: "8 (916) 734-46-57"
        },
        {
          link: "",
          icon: "whatsapp",
          text: "8 (916) 734-46-57"
        },
        {
          link: "",
          icon: "instagram",
          text: "@brother-Alex"
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


