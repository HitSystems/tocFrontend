<template>
    <div class="container-mesas">
        <div v-for="(item, index) in arrayCestas" v-bind:key="index" class="row mt-3">
            <div v-if="existePosicion(index*4+ 0)" class='col-md-3 text-center'>
                <div class="card cestaActiva mb-3" style="max-width: 18rem;">
                    <div class="card-header">{{arrayCestas[index*4].nombreCesta}}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{getTotalPosicion(index*4+ 0)}} €</h5>
                        <div class="pt-2">
                            <button @click="seleccionarCesta(index*4+ 0)" class="btn btn-primary sizeBotones">Abrir</button>
                            <button class="btn btn-danger ms-2 sizeBotones">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="existePosicion(index*4+ 1)" class='col-md-3 text-center'>
                <div class="card cestaActiva mb-3" style="max-width: 18rem;">
                    <div class="card-header">{{arrayCestas[index*4+ 1].nombreCesta}}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{getTotalPosicion(index*4+ 1)}} €</h5>
                        <div class="pt-2">
                            <button @click="seleccionarCesta(index*4+ 1)" class="btn btn-primary sizeBotones">Abrir</button>
                            <button class="btn btn-danger ms-2 sizeBotones">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="existePosicion(index*4+ 2)" class='col-md-3 text-center'>
                <div class="card cestaActiva mb-3" style="max-width: 18rem;">
                    <div class="card-header">{{arrayCestas[index*4+ 2].nombreCesta}}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{getTotalPosicion(index*4+ 2)}} €</h5>
                        <div class="pt-2">
                            <button @click="seleccionarCesta(index*4+ 2)" class="btn btn-primary sizeBotones">Abrir</button>
                            <button class="btn btn-danger ms-2 sizeBotones">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="existePosicion(index*4+ 3)" class='col-md-3 text-center'>
                <div class="card cestaActiva mb-3" style="max-width: 18rem;">
                    <div class="card-header">{{arrayCestas[index*4+ 3].nombreCesta}}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{getTotalPosicion(index*4+ 3)}} €</h5>
                        <div class="pt-2">
                            <button @click="seleccionarCesta(index*4+ 3)" class="btn btn-primary sizeBotones">Abrir</button>
                            <button class="btn btn-danger ms-2 sizeBotones">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class='row mt-3 mb-3 fixed-row-bottom'>
            <div class='col text-center'>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Nueva mesa</h5>
                        <p class="card-text">Crear nueva mesa</p>
                        <a href="#" class="btn btn-primary">Crear</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="position-absolute bottom-0 end-0">
        <button @click="volver()" class="btn btn-primary btn-lg me-2">VOLVER</button>
    </div>
</template>
<script>
    import { computed, onMounted, ref } from 'vue';
    import router from '../router/index';
    import axios from 'axios';
    import { useToast } from 'vue-toastification';
    import { useStore } from 'vuex';

    export default {
        name: 'MesasComponent',
        setup() {
            const activo = ref(0);
            const store = useStore();
            const arrayCestas = ref([]);
            const toast = useToast();
            const nRows = computed(() => {
                if (arrayCestas.value.length % 4 > 0) {
                    return parseInt(arrayCestas.value.length/4) + 1;
                } else {
                    return parseInt(arrayCestas.value.length/4);
                }
            });
            function setActivo(x) {
                activo.value = x;
            }

            function volver() {
                router.push('/');
            }

            function seleccionarCesta(index) {
                store.dispatch('Cesta/setIdAction', arrayCestas.value[index]._id);
                volver();
            }

            function existePosicion(index) {
                if (arrayCestas.value[index] != undefined) {
                    return true;
                } else {
                    return false;
                }
            }

            function getTotalPosicion(index) {
                let subtotal = 0;
                console.log(arrayCestas.value);
                for (let i = 0; i < arrayCestas.value[index].lista.length; i++) {
                    subtotal += arrayCestas.value[index].lista[i].subtotal;
                }
                return subtotal;
            }

            onMounted(() => {
                axios.get('cestas/getCestas').then((res) => {
                    if (res.data.error == false) {
                        arrayCestas.value = res.data.info;
                    } else {
                        toast.error(res.data.mensaje);
                    }
                }).catch((err) => {
                    console.log(err);
                    toast.error('Error en get > cestas/getCestas');
                });
            });

            return {
                seleccionarCesta,
                getTotalPosicion,
                existePosicion,
                nRows,
                arrayCestas,
                volver,
                setActivo,
            };
        },
    };
</script>
<style scoped>
    .fixed-row-bottom {
        position: fixed;
        bottom: 0;
    }

    .cestaActiva {
        background: #EFD8A6;
    }
    .sizeBotones {
        font-size: 2em;
    }
</style>
