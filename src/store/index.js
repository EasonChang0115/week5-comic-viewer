import Vue from 'vue';
import Vuex from 'vuex';

import night from './modules/night';
import chapters from './modules/chapters';

Vue.use(Vuex);

// 組件呼叫方式 this.$store.state.night.isNight
export default new Vuex.Store({
  modules: {
    night,
    chapters
  }
})