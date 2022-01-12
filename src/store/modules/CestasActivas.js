export default {
    namespaced: true,
    state: {
      cestas: [],
    },
    mutations: {
      setCestasActivasMutation(state, payload) {
        state.cestas.push(payload);
      },
    },
    getters: {
      // eslint-disable-next-line no-underscore-dangle
      getCestasActivas: (state) => state.cestas,
    },
    actions: {
        setCestasActivasAction({ commit }, cesta) {
        commit('setCestasActivasMutation', cesta);
      },
    },
  };
  