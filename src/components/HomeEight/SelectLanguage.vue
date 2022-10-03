<template>
  <div>
    <b-dropdown v-model="locale" toggle-class="selectLang" variant="outline">
      <template #button-content>
        {{ $t('message.language') }}
      </template>
      <b-dropdown-item @click="selectEn">English</b-dropdown-item>
      <b-dropdown-item @click="selectRu">Русский</b-dropdown-item>
    </b-dropdown>
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
      selectEn() {
        this.$i18n.locale = "en-US"
        localStorage.setItem('locale', this.$i18n.locale)
      },
      selectRu() {
        this.$i18n.locale = "ru-РУС"
        localStorage.setItem('locale', this.$i18n.locale)
      }
    }
  }
</script>

<style>
  .selectLang {
    height: 30px;
    width: 100px;
    font-size: 15px !important;
    font-weight: 500 !important;
    padding-right: 10px !important;
  }
  .dropdown-menu.show {
    min-width: 7rem !important;
  }
  .dropdown-item {
    font-size: 15px !important;
  }
  .selectLang:focus {
    box-shadow: none !important;
  }
</style>