<template>
  <div class="shop-grid-topbar">
    <select v-model="locale" @change="onLocalChange">
        <option value="en-US">English</option>
        <option value="ru-РУС">Русский</option>
    </select>
</div>
</template>

<script>
  export default {
    data () {
      return { locale: 'en-US' }
    },
    mounted() {
      this.$i18n.locale = localStorage.getItem('locale')
    },
    methods: {
      onLocalChange() {
        this.$i18n.locale = this.locale
        localStorage.setItem('locale', this.$i18n.locale)
      }
    }
  }
</script>