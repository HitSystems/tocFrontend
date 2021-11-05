<template>
    <div class='container-mesas'>
        <div class='row mt-3'>
            <div class='col text-center' v-for='cesta in cestas' :key="cesta._id">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 v-if='cesta.nombre === null' class="card-title">Principal</h5>
                        <h5 v-else class="card-title">{{cesta.nombre}}</h5>
                        <p class="card-text">Total: {{ Number(cesta.tiposIva.importe1 + cesta.tiposIva.importe2 + cesta.tiposIva.importe3).toFixed(2) }}</p>
                        <button type='button' @click='seleccionarCesta(cesta._id)' class="btn btn-primary">Seleccionar</button>
                        <button type='button' @click='borrarCesta(cesta._id)' class="btn btn-danger ms-2">Borrar</button>
                    </div>
                </div>
            </div>
            <div class='row mt-3 mb-3 fixed-row-bottom'>
                <div class='col text-center'>
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Nueva mesa</h5>
                            <input type='text' placeholder='Nombre de la mesa/ticket' v-model='nombre' />
                            <p class="card-text">Crear nueva mesa</p>
                            <a @click="crearCesta()" href="#" class="btn btn-primary">Crear</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="position-absolute bottom-0 end-0">
            <button @click="volver()" class="btn btn-primary btn-lg me-2">VOLVER</button>
        </div>
    </div>
</template>
<script>
    import { ref, onMounted, computed } from 'vue';
    import { useStore } from 'vuex';
    import axios from 'axios';
    import router from '../router/index';

    export default {
        name: 'MesasComponent',
        setup() {
            const store = useStore();
            const nombre = ref('');
            const cestas = ref(null);
            function volver() {
                router.push('/');
            }
            function crearCesta() {
                if(nombre.value === '') {
                    alert('El nombre no puede estar vacío.');
                    return;
                }
                axios.post('/cestas/crearCesta', { nombreCesta: nombre.value }).then((res) => {
                    if(!res.data.error) volver();
                }).catch((err) => {
                    console.log(err);
                    alert('¡Error en la creación! Contacta con informática.')
                })
            }
            function seleccionarCesta(idCesta) {
                store.dispatch('Cesta/setIdAction', idCesta);
                volver();
            }
            function borrarCesta(idCesta) {
                axios.post('/cestas/borrarCesta', { id: idCesta });
                volver();
            }
            onMounted(() => {
                axios.get('/cestas/getCestas').then((res) => {
                    if(!res.data.error) {
                        cestas.value = res.data.cestas;
                    }
                }).catch((err) => {
                    console.log(err);
                    alert('¡Error descargando las cestas/tickets! Contacta con informática.')
                });

            });
            return {
                volver,
                nombre,
                crearCesta,
                cestas,
                seleccionarCesta,
                borrarCesta,
            };
        },
    };
</script>
<style scoped>
    .fixed-row-bottom {
        position: fixed;
        bottom: 0;
    }
</style>
