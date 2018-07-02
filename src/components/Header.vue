<template>
  <header class="my-header">
    <div class="container">
      <div class="logo-text">{{ msg }}</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Comicomic'
    }
  }
}
</script>

<style lang="scss">
@import '../style/components/header.scss';
</style>

