<template>
  <div class="container-fliud">
      <div class="row text-center mt-2">
          <div class="col">
            <button class="btn btn-primary buttonSizeTecnico" @click="descargarClientesFinales()">Descargar clientes finales</button>
          </div>
      </div>
      <div class="row text-center mt-2">
          <div class="col">
            <button class="btn btn-primary buttonSizeTecnico" @click="descargarTicketInfo()">Descargar info. ticket finales</button>
          </div>
      </div>
      <div class="row text-center mt-2">
          <div class="col">
            <button class="btn btn-primary buttonSizeTecnico" @click="actualizarTrabajadores()">Actualizar trabajadores</button>
          </div>
      </div>
      <div class="row text-center mt-2">
          <div class="col">
            <button class="btn btn-primary buttonSizeTecnico" @click="actualizarTeclados()">Actualizar teclado</button>
          </div>
      </div>
      <div class="row text-center mt-2">
          <div class="col">
            <button class="btn btn-primary buttonSizeTecnico" data-bs-toggle="modal" data-bs-target="#modalConfigImpresora">Config. VID y PID impresora</button>
          </div>
      </div>
      <div class="row text-center mt-2">
          <div class="col">
            <button class="btn btn-primary buttonSizeTecnico" data-bs-toggle="modal" data-bs-target="#modalConfigPaytef">Config. IP Paytef</button>
          </div>
      </div>
      <div class="row text-center mt-2">
          <div class="col">
            <button class="btn btn-primary buttonSizeTecnico" @click="imprimirTest()">Imprimir test</button>
          </div>
      </div>
      <div class="row text-center mt-2">
          <div class="col">
            <button class="btn btn-primary buttonSizeTecnico" data-bs-toggle="modal" data-bs-target="#modalAddProducto">Añadir producto</button>
          </div>
      </div>
      <div class="row text-center mt-2">
          <div class="col">
            <button class="btn btn-primary buttonSizeTecnico" @click="exit()">Cambiar precio</button>
          </div>
      </div>
      <div class="row text-center mt-2">
          <div class="col">
            <button class="btn btn-primary buttonSizeTecnico" @click="actualizarEnvioDatos()">Enviar datos: {{ enviarDatos ? 'SÍ' : 'NO' }}</button>
          </div>
      </div>
  </div>
  <div class="position-fixed bottom-0 start-0 ms-2 mb-2">
      <button class="btn btn-warning buttonSizeTecnico" @click="volver()">Volver</button>
  </div>

<!-- Modal -->
<div class="modal fade" id="modalConfigImpresora" tabindex="-1" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Configuración VID y PID impresora</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">VID</span>
            <input type="text" class="form-control" placeholder="0x4B8" v-model="vid">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">PID</span>
            <input type="text" class="form-control" placeholder="0x202" v-model="pid">
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="guardarCambiosImpresora()">Guardar cambios</button>
    </div>
    </div>
</div>
</div>
<!-- FIN MODAL IMPRESORA -->

<!-- Modal -->
<div class="modal fade" id="modalConfigPaytef" tabindex="-1" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Configuración IP datáfono PAYTEF</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">IP</span>
            <input type="text" class="form-control" placeholder="10.129.xxx.29" v-model="ipPaytef">
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="guardarCambiosPaytef()">Guardar cambios</button>
    </div>
    </div>
</div>
</div>
<!-- FIN MODAL PAYTEF -->

<!-- MODAL AÑADIR PRODUCTO -->
<div class="modal fade" id="modalAddProducto" tabindex="-1" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Añadir producto</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Nombre</span>
            <input type="text" class="form-control" v-model="nombreProducto">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Precio</span>
            <input type="number" class="form-control" v-model="precioProducto">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Menú</span>
            <select class='form-control'>
                <option value=''>Menu 1</option>
                <option value=''>Menu 2</option>
                <option value=''>Menu 3</option>
                <option value=''>Menu 4</option>
                <option value=''>Menu 5</option>
            </select>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="guardarCambiosPaytef()">Guardar cambios</button>
    </div>
    </div>
</div>
</div>
<!-- FIN MODAL AÑADIR PRODUCTO -->
</template>

<script>
import axios from 'axios';
import { useStore } from 'vuex';
import router from '../router/index';
import { useToast } from 'vue-toastification';
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
    setup() {
        const store = useStore();
        const toast = useToast();
        const vid = ref('');
        const pid = ref('');
        const ipPaytef = ref('');
        const enviarDatos = ref(true);
        function descargarClientesFinales() {
            axios.post('clientes/descargarClientesFinales').then((res) => {
                if (res.data.error == false) {
                    toast.success('Clientes descargados OK');
                } else {
                    toast.error(res.data.mensaje);
                }
            }).catch((err) => {
                console.log(err);
                toast.error('Error descargarClientesFinales CATCH');
            });
        }
        function volver() {
            router.push('/menu/caja');
        }
        function exit() {
            store.dispatch('setModoActual', 'MODIFICAR_ARTICULO')
            router.push('/');
        }
        function actualizarTeclados() {
            axios.post('teclado/actualizarTeclado').then((res) => {
                if (res.data.error == false) {
                    toast.success("OK");
                } else {
                    toast.error(res.data.mensaje)
                }
            }).catch((err) => {
                console.log(err);
                toast.error('Error catch');
            });
        }
        function imprimirTest() {
            axios.post('test/imprimirAlgo');
        }
        function guardarCambiosImpresora() {
            axios.post('parametros/vidAndPid', { vid: vid.value, pid: pid.value }).then((res) => {
                if (res.data.error == false) {
                    toast.success('Cambios guardados');
                } else {
                    toast.error(res.data.mensaje);
                }
            }).catch((err) => {
                console.log(err);
                toast.error("Error guardarCambiosImpresora CATCH");
            });
        }
        function guardarCambiosPaytef() {
            axios.post('parametros/setIpPaytef', { ip: ipPaytef.value }).then((res) => {
                if (res.data.error == false) {
                    toast.success('Cambios guardados');
                } else {
                    toast.error(res.data.mensaje);
                }
            }).catch((err) => {
                console.log(err);
                toast.error("Error guardarCambiosPaytef CATCH");
            });
        }
        function actualizarTrabajadores() {
            axios.post('trabajadores/actualizarTrabajadores').then((res) => {
                if (res.data.error == false) {
                    toast.success('Trabajadores actualizados');
                } else {
                    toast.error(res.data.mensaje);
                }
            });
        }
        function descargarTicketInfo() {
            axios.post('params-ticket/descargarInfoTicket').then((res) => {
                if (res.data.error == false) {
                    toast.success('Info. ticket actualizada');
                } else {
                    toast.error(res.data.mensaje);
                }
            }).catch((err) => {
                console.log(err);
                toast.error('Error en Catch');
            });
        }
        function actualizarEnvioDatos() {
            enviarDatos.value = !enviarDatos.value;
        }
        // onMounted(() => {
        //     axios.get('parametros/getVidAndPid').then((res) => {
        //         if (res.data.error == false) {
        //             vid.value = res.data.info.impresoraUsbInfo.vid;
        //             pid.value = res.data.info.impresoraUsbInfo.pid;
        //         } else {
        //             toast.error(res.data.mensaje);
        //         }
        //     }).catch((err) => {
        //         console.log(err);
        //         toast.error('Error getVidPid');
        //     });
        //     axios.get('parametros/getIpPaytef').then((res) => {
        //         if (res.data.error == false) {
        //             ipPaytef.value = res.data.info;
        //         } else {
        //             toast.error(res.data.mensaje);
        //         }
        //     }).catch((err) => {
        //         console.log(err);
        //         toast.error('Error getIpPaytef');
        //     });
        // });
        return {
            guardarCambiosPaytef,
            ipPaytef,
            actualizarTrabajadores,
            imprimirTest,
            guardarCambiosImpresora,
            vid,
            pid,
            descargarTicketInfo,
            volver,
            descargarClientesFinales,
            actualizarTeclados,
            actualizarEnvioDatos,
            enviarDatos,
            exit,
        };     
    },
}
</script>

<style scoped>
 .buttonSizeTecnico {
     font-size: 40px;
 }
</style>