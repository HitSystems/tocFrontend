<template>
    <div class='col-md-6 ms-3 mt-3'>
        <div class='row ms-3'>
            <div class="card cardWidth">
                <div class="card-body" style='text-align: center;'>
                    <span><i class="bi bi-door-open"></i></span>
                    <a href="#" class="btn btn-primary" @click="abrirModal()">Fichaje</a>
                </div>
            </div>

            <div class="card cardWidth">
                <div class="card-body" style='text-align: center;'>
                    <span><i class="bi bi-cup-straw"></i></span>
                    <button @click="consumoPersonal()" class="btn btn-primary">Consumo personal</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="modalFichajes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="max-width: 700px">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Fichaje</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
                <input v-model="inputBusqueda" class="form-control" style="width: 350px; height: 50px; font-size: 20px" type="text" placeholder="Introduce tu nombre">
                <button type="button" style="width: 100px" class="btn btn-primary ms-2" @click="buscar()">Buscar</button>
                <button type="button" style="width: 200px" class="btn btn-warning ms-2" @click="actualizarLista()">Actualizar lista</button>
                <div class="row mt-2">
                    <div class="table" style="height: 400px;">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Fichar/Desfichar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(trabajador, index) of arrayTrabajadores" v-bind:key="index">
                                    <td>{{trabajador.nombre}}</td>
                                    <td v-if="trabajador.fichado === false || trabajador.fichado == undefined"><a href="#" style="width: 150px" class="btn btn-outline-primary btn_fc" @click="fichar(trabajador, index)">FICHAR</a></td>
                                    <td v-else><a href="#" style="width: 150px" class="btn btn-outline-success btn_fc" @click="desfichar(trabajador, index)">DESFICHAR</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-danger btn-lg" data-bs-dismiss="modal">Cerrar</button>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
import { Modal } from 'bootstrap';
import { onMounted, ref, watch } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
import router from '../router/index';
import { useToast } from 'vue-toastification';

export default {
    name: 'Dependientas',
    setup() {
        const store = useStore();
        const nombre = 'Santy';
        const id = 156;
        let modalFichajes = null;
        const arrayTrabajadores = ref([]);
        const inputBusqueda = ref('');
        const toast = useToast();

        function abrirModal() {
            modalFichajes.show();
        }

        function cerrarModal() {
            modalFichajes.hide();
        }

        function buscar() {
            axios.post('trabajadores/buscar', { busqueda: inputBusqueda.value }).then((res) => {
                arrayTrabajadores.value = res.data;
            }).catch((err) => {
                console.log(err);
            });
        }

        function fichar(trabajador, index) {
            axios.post('trabajadores/fichar', { idTrabajador: trabajador.idTrabajador }).then((res) => {
                if (!res.data.error) {
                    console.log('Trabajador fichado');
                    // store.dispatch('Trabajadores/setTrabajadorActivo', arrayTrabajadores.value[index].nombre);
                    arrayTrabajadores.value[index].fichado = true;
                } else {
                    console.log(res.data.mensaje);
                    arrayTrabajadores.value[index].fichado = false;
                }
            }).catch((err) => {
                console.log(err);
            });
        }

        function actualizarLista() {
            axios.post('trabajadores/actualizarTrabajadores').then((res) => {
                if (res.data.error == false) {
                    toast.success('Trabajadores actualizados');
                } else {
                    toast.error(res.data.mensaje);
                }
            });
        }

        function desfichar(trabajador, index) {
            axios.post('trabajadores/desfichar', { idTrabajador: trabajador.idTrabajador }).then((res) => {
                if (!res.data.error) {
                    console.log('Trabajador desfichado');
                    arrayTrabajadores.value[index].fichado = false;
                } else {
                    console.log('Error al desfichar');
                }
            }).catch((err) => {
                console.log(err);
            });
        }

        function consumoPersonal() {
            store.dispatch('setModoActual', 'CONSUMO PERSONAL');
            store.dispatch('Footer/setMenuActivo', 1);
            router.push('/');
        }

        onMounted(() => {
            modalFichajes = new Modal(document.getElementById('modalFichajes'), {
                keyboard: false,
            });
        });

        return {
            actualizarLista,
            consumoPersonal,
            fichar,
            desfichar,
            inputBusqueda,
            arrayTrabajadores,
            buscar,
            cerrarModal,
            abrirModal,
            nombre,
            id,
        };
    },
    watch: {
        inputBusqueda: function () {
            if (this.inputBusqueda.length >= 3) {
                this.buscar();
            }
        }
    }
};
</script>
<style scoped>
    .cardWidth {
       width: 10rem;
       margin: 5px;
    }
    span i {
        font-size: 5rem;
    }
</style>
