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
            <button class="btn btn-primary buttonSizeTecnico" @click="actualizarTeclados()">Actualizar teclado</button>
          </div>
      </div>
      <div class="row text-center mt-2">
          <div class="col">
            <button class="btn btn-primary buttonSizeTecnico" data-bs-toggle="modal" data-bs-target="#modalConfigImpresora">Config. VID y PID impresora</button>
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
</template>

<script>
import axios from 'axios';
import router from '../router/index';
import { useToast } from 'vue-toastification';
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';


export default {
    setup() {
        const toast = useToast();
        const vid = ref('');
        const pid = ref('');

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

        onMounted(() => {
            axios.get('parametros/getVidAndPid').then((res) => {
                if (res.data.error == false) {
                    vid.value = res.data.info.impresoraUsbInfo.vid;
                    pid.value = res.data.info.impresoraUsbInfo.pid;
                } else {
                    toast.error(res.data.mensaje);
                }
            }).catch((err) => {
                console.log(err);
                toast.error('Error get');
            });
        });

        return {
            guardarCambiosImpresora,
            vid,
            pid,
            descargarTicketInfo,
            volver,
            descargarClientesFinales,
            actualizarTeclados
        };     
    },
}
</script>

<style scoped>
 .buttonSizeTecnico {
     font-size: 40px;
 }
</style>