import * as types from '../mutation-types';

const night = {
  namespaced: true,
  state: {
    isNight: false
  },
  mutations: {
    [types.SWITCH_NIGHT] (state){
      state.isNight = !state.isNight;
    }
  }
}

export default night;