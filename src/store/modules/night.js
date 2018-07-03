const night = {
  namespaced: true,
  state: {
    isNight: false
  },
  mutations: {
    switchNight(state){
      state.isNight = !state.isNight;
    }
  }
}

export default night;