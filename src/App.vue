<template>
  <div id="app" :class="isNight? 'night' : ''">
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MyHeader from './components/Header';
export default {
  name: 'App',
  components: {
    MyHeader
  },
  computed: {
    ...mapState('night',['isNight'])
  },
}
</script>

<style lang="scss">
#app {
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  padding-bottom: 32px;
  transition: .3s;
}
#app.night {
  background-color: black;
}
</style>
