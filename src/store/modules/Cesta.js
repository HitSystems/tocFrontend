export default {
  namespaced: true,
  state: {
    cesta: {
      _id: -1,
      lista: [],
    },
    activo: null,
  },
  mutations: {
    setCestaMutation(state, payload) {
      state.cesta = payload;
    },
    setActivoMutation(state, payload) {
      state.activo = payload;
    },
    setIdMutation(state, payload) {
      state.cesta._id = payload;
    },
  },
  getters: {
    // eslint-disable-next-line no-underscore-dangle
    getItem: (state) => state.cesta.lista[state.activo]._id,
    getCestaId: (state) => state.cesta._id
  },
  actions: {
    setCestaAction({ commit }, cesta) {
      commit('setCestaMutation', cesta);
    },
    setActivoAction({ commit }, activo) {
      commit('setActivoMutation', activo);
    },
    setIdAction({ commit }, idCesta) {
      commit('setIdMutation', idCesta);
    },
  },
};
