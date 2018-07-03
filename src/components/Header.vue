<template>
  <header class="my-header" :class="isNight? 'night' : ''">
    <div class="container">
      <div class="logo-text">{{ msg }}</div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  data () {
    return {
      msg: 'Comicomic'
    }
  },
  computed: {
    ...mapState('night',['isNight'])
  },
}
</script>

<style lang="scss">
@import '../style/components/header.scss';
</style>

