import { Modal } from 'bootstrap';

export default {
  namespaced: true,
  state: {
    tareasState: ['tarea 1', 'tarea 2', 'tarea 3'],
    edadState: 26,
    modal: null,
    idArticulo: 0,
    idBoton: '',
    precioConIva: 0,
    suplementos: [],
  },
  mutations: {
    testMutation(state, payload) {
      state.edadState = payload;
    },
    abrirModalMutation(state, payload) {
      state.suplementos = payload.suplementos;
      state.modal.show();
      state.idArticulo = payload.idArticulo;
      state.idBoton = payload.idBoton;
      state.precioConIva = payload.precioConIva;
    },
    setModalMutation(state) {
      const modalElement = document.getElementById('modalSuplementos');
      if (modalElement != null) {
        state.modal = new Modal(modalElement, { keyboard: false });
      }
    },
    cerrarModalMutation(state) {
      state.modal.hide();
    },
    setSuplementosMutation(state, payload) {
      state.suplementos = payload.suplementos;
    }
  },
  actions: {
    testAction({ commit }) {
      commit('testMutation', 30);
    },
    abrirModal({ commit }, data) {
      commit('abrirModalMutation', data);
    },
    cerrarModal({ commit }) {
      commit('cerrarModalMutation');
    },
    setModal(context) {
      context.commit('setModalMutation');
    },
    setSuplementos({ commit }, data) {
      commit('setSuplementosMutation', data)
    }
  },
};
