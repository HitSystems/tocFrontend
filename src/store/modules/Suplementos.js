export default {
    namespaced: true,
    state: {
      suplementos: [],
    },
    mutations: {
        setSuplementosMutation(state, payload) {
            state.suplementos = payload;
        },
    },
    actions: {
      setSuplementosAction({ commit }, hidden) {
          commit('setSuplementosMutation', hidden);
      },
    },
};
