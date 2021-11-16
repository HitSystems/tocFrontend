<template>
  <div class="modal" id="modalSuplementos" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document" style="max-width: 600px">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Suplementos</h5>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class='col' v-for='sup of suplementos' v-bind:key='sup'>
                <button 
                class="btn btn-primary rounded-0 w-100 teclas colorIvan2"
                style="background-color: #dee3e9; font-size: 1.02vw;"
                @click='seleccionarSuplemento(sup.id)'>
                    {{sup.nombre}} <br /> {{sup.precio}}
                </button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button"
          class="btn btn-secondary btn-lg mr-0"
          >OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

export default {
  name: 'ModalSuplementos',
  setup() {
    const store = useStore();
    const unidades = ref('0');
    const cesta = computed(() => store.state.Cesta.cesta);
    const infoArticulo = computed(() => store.state.Suplementos);
    // var idBoton = null;
    const suplementos = computed(() => store.state.Suplementos.suplementos);
    
    function seleccionarSuplemento(id) {
        console.log(id)
        axios.post('cestas/clickTeclaArticulo', {
            idArticulo: infoArticulo.value.idArticulo,
            idBoton: infoArticulo.value.idBoton,
            peso: false,
            infoPeso: false,
            idCesta: cesta.value._id,
            suplementosOk: true,
            suplemento: id,
        }).then((res2) => {
            if (res2.data.error === false && res2.data.bloqueado === false) {
                store.dispatch('Cesta/setCestaAction', res2.data.cesta);
                store.dispatch('Suplementos/cerrarModal');
            } else {
                console.log('Error en clickTeclaArticulo');
            }
        })
    }
    onMounted(() => {
        store.dispatch('Suplementos/setModal');
    });

    return {
        suplementos,
        seleccionarSuplemento,
    };
    /* FINAL SETUP */
  },
};
</script>

<style scoped>
.teclas {
    height: 70px;
}
.colJuntitas {
    /* padding-right: 0px; */
    padding: 2px;
}
.colorIvan1 {
    background-color: #DEE3E9 !important;
    color: #5E5F61 !important;
    border-color: #DEE3E9 !important;
}
.colorIvan2 {
    background-color: #EDDECB !important;
    color: #5E5F61 !important;
    border-color: #EDDECB !important;
}
.colorIvan3 {
    background-color: #FBB5B5 !important;
    color: #5E5F61 !important;
    border-color: #FBB5B5 !important;
}
.colorIvan4 {
    background-color: #DCE9D5 !important;
    color: #5E5F61 !important;
    border-color: #DCE9D5 !important;
}
.colorIvan5 {
    background-color: #EFD8A6 !important;
    color: #5E5F61 !important;
    border-color: #EFD8A6 !important;
}
.colorIvan6 {
    background-color: #B0AEC6 !important;
    color: #5E5F61 !important;
    border-color: #B0AEC6 !important;
}
.botonesMenu {
    background-color: #d45600;
    border-color: #d45600;
    margin-right: 4px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.menus {
    height: 70px;
}
.colorMenus {
    background-color: #d45600;
    color: #fffaee;
    border-color: #d45600;
}
.activo {
    background-color: #fff5e9;
    color: #c95907;
    border-color: #bf5c18;
}
.btn-secondary:hover {
    color: #c95907 !important;
    background-color: #fff5e9 !important;
    border-color: #bf5c18 !important;
  }
  .btn-secondary:focus, .btn-secondary.focus {
    color: #c95907 !important;
    background-color: #fff5e9 !important;
    border-color: #bf5c18 !important;
    box-shadow: none !important;
  }
  .btn-secondary.disabled, .btn-secondary:disabled {
    color: #fff !important;
    background-color: #6c757d !important;
    border-color: #6c757d !important;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #c95907 !important;
    background-color: #fff5e9 !important;
    border-color: #bf5c18 !important;
  }
  .btn-secondary:not(:disabled):not(.disabled):active:focus,
  .btn-secondary:not(:disabled):not(.disabled).active:focus
  .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: none !important;
  }
  .colJuntitasMenus {
    padding-right: 0px;
  }
  div.scrollmenu {
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
  }
</style>