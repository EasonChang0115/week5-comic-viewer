import Vue from 'vue';
import Vuex, { mapState } from 'vuex';

Vue.use(Vuex);

const night = {
  namespace: true,
  state: {
    isNight: false
  },
  mutations: {
    switchNight(state, payload){
      state.isNight = !state.isNight;
    }
  },
  getters: {
    getState(state, getters, rootState, rootGetters) {
      // root 全域的state 或 getters 
      // 若要用到chapter的state : rootState.chapter.nowChapter
      // 若要用到chapter的getters: rootGetters.chapter.chapterGetter
    }
  },
  actions: {
    fetchState({commit, dispatch, state, getters, rootState, rootGetters}){
      // 同getters
    }
  }
}

const chapters = {
  namespace: true,
  state: {
    chapters: [],
    chapters: 0,
  },
  getters: {
    chapterGetter(state) {
      return 'test'
    }
  },
  mutations: {

  },
  actions: {
    fetchState({commit}){
      //....
      // 若要用到night的mutations 
      commit('todos/switchNight',[1,2,3], {root: true} );
    }
  }
}

// 組件呼叫方式 this.$store.state.night.isNight
// 宣告namespace下面就可以用同樣的方法名稱
// 組件呼叫方式 this.$store.dispatch('night/fetchState')
// 組件呼叫方式 this.$store.dispatch('chapters/fetchState')

// mapState 第一個參數傳入他的namespace
// computedL {
//   ...mapState('night',['isNight']),
//   ...mapState('chapters',['chapters','chapters'])
// }

export default new Vuex.Store({
  modules: {
    night,
    chapters
  }
})