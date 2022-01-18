export default {
    namespaced: true,
    state: {
      suplementos: [],
      suplementosSeleccionados: [],
    },
    mutations: {
        setSuplementosMutation(state, payload) {
            state.suplementos = payload;
        },
        setSuplementosSeleccionadosMutation(state, payload) {
          console.log('Payload', payload)
          state.suplementosSeleccionados.push(payload);
          console.log(state.suplementosSeleccionados)
        },
    },
    actions: {
      setSuplementosAction({ commit }, hidden) {
          commit('setSuplementosMutation', hidden);
      },
      setSuplementosSeleccionadosAction({ commit }, hidden) {
          commit('setSuplementosSeleccionadosMutation', hidden);
      },
    },
};
