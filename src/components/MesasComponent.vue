<template>
    <div class="container-mesas">
        <!--<div v-for="(item, index) in arrayCestas" v-bind:key="index" class="row mt-3">
            <div v-if="existePosicion(index*10+ 0)" class='col-md-3 text-center'>
                <div class="card cestaActiva mb-3" style="max-width: 20rem;">
                    <div class="card-header titleStyle">{{arrayCestas[index*10].nombreCesta}}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{getTotalPosicion(index*10+ 0)}} €</h5>
                        <div class="pt-2">
                            <button @click="seleccionarCesta(index*10+ 0)" class="btn btn-primary sizeBotones">Abrir</button>
                            <button @click="borrarCesta(index*10)" class="btn btn-danger ms-2 sizeBotones">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="existePosicion(index*10+ 1)" class='col-md-3 text-center'>
                <div class="card cestaActiva mb-3" style="max-width: 20rem;">
                    <div class="card-header titleStyle">{{arrayCestas[index*10+ 1].nombreCesta}}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{getTotalPosicion(index*10+ 1)}} €</h5>
                        <div class="pt-2">
                            <button @click="seleccionarCesta(index*10+ 1)" class="btn btn-primary sizeBotones">Abrir</button>
                            <button @click="borrarCesta(index*10+ 1)" class="btn btn-danger ms-2 sizeBotones">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="existePosicion(index*10+ 2)" class='col-md-3 text-center'>
                <div class="card cestaActiva mb-3" style="max-width: 20rem;">
                    <div class="card-header titleStyle">{{arrayCestas[index*10+ 2].nombreCesta}}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{getTotalPosicion(index*10+ 2)}} €</h5>
                        <div class="pt-2">
                            <button @click="seleccionarCesta(index*10+ 2)" class="btn btn-primary sizeBotones">Abrir</button>
                            <button @click="borrarCesta(index*10+ 2)" class="btn btn-danger ms-2 sizeBotones">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="existePosicion(index*10+ 3)" class='col-md-3 text-center'>
                <div class="card cestaActiva mb-3" style="max-width: 20rem;">
                    <div class="card-header titleStyle">{{arrayCestas[index*10+ 3].nombreCesta}}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{getTotalPosicion(index*10+ 3)}} €</h5>
                        <div class="pt-2">
                            <button @click="seleccionarCesta(index*10+ 3)" class="btn btn-primary sizeBotones">Abrir</button>
                            <button @click="borrarCesta(index*10+ 3)" class="btn btn-danger ms-2 sizeBotones">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
        <div v-for="i in 10" :key='i' class='row mt-1'>
            <div v-for='j in 10' :key='j' class='col'>
                <div class='mesaGeneral' @click='seleccionarCesta(findMesa(j, i))' v-bind:class="[{'cardMesa': findMesa(j, i).activada, 'cardMesaDisabled': !findMesa(j, i).activada}]">
                    <p>{{findMesa(j, i).nombre}}</p>
                    <p>{{findMesa(j, i).total}}</p>
                </div>
            </div>
        </div> 
    </div>
    <div class="position-fixed bottom-0 end-0 mb-1 me-2">
        <button @click="volver()" class="btn btn-warning sizeBotones me-2"> Volver </button>
        <button type="button" class="btn btn-primary sizeBotones" @click="abrirModal()">Inicio</button>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="modalNuevaCesta" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Crear nueva cesta</h5>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col">
                    <div class="input-group input-group-lg">
                    <input v-model="nuevaCestaString" type="text" class="form-control" style="font-weight: bold;" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-6 text-center">
                    <div class="btn-group-vertical">
                        <button @click="addText(' PISO')" class="btn btn-secondary mnemoSize border">PISO</button>
                        <button @click="addText(' CASA')" class="btn btn-secondary mt-2 mnemoSize border">CASA</button>
                        <button @click="addText(' BARCO')" class="btn btn-secondary mt-2 mnemoSize border">BARCO</button>
                        <button @click="addText(' DEVOLUCIÓN')" class="btn btn-warning mt-2 mnemoSize border">DEVOLUCIÓN</button>
                    </div>
                </div>
                <div class="col-md-6 text-center">
                    <div class="btn-group-vertical">
                        <button @click="addText(' BLANCO')" style="background: #EEEEEE; color:black;" class="btn btn-primary mnemoSize border">BLANCO</button>
                        <button @click="addText(' ROJO')" style="background: #E86A6A; color:black;" class="btn btn-primary mt-2 mnemoSize border">ROJO</button>
                        <button @click="addText(' AZUL')" style="background: #5399D1; color:black;" class="btn btn-primary mt-2 mnemoSize border">AZUL</button>
                        <button @click="addText(' VERDE')" style="background: #76B842; color:black;" class="btn btn-warning mt-2 mnemoSize border">VERDE</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer mt-1 mx-auto">
            <button type="button" class="btn btn-danger btn-lg" @click="cerrarModal()">Cerrar</button>
            <button type="button" class="btn btn-secondary btn-lg" @click="borrarLetra()">Borrar</button>
            <button type="button" class="btn btn-primary btn-lg" @click="crearCesta()">Crear</button>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
    import { computed, onMounted, ref } from 'vue';
    import router from '../router/index';
    import axios from 'axios';
    import { useToast } from 'vue-toastification';
    import { useStore } from 'vuex';
    import { Modal } from 'bootstrap';

    export default {
        name: 'MesasComponent',
        setup() {
            const activo = ref(0);
            const store = useStore();
            const arrayCestas = ref([]);
            const toast = useToast();
            const nuevaCestaString = ref('');
            const nRows = computed(() => {
                if (arrayCestas.value.length % 4 > 0) {
                    return parseInt(arrayCestas.value.length/4) + 1;
                } else {
                    return parseInt(arrayCestas.value.length/4);
                }
            });
            var modal = null;


            function setActivo(x) {
                activo.value = x;
            }

            function addText(texto) {
                nuevaCestaString.value += texto;
            }

            function borrarLetra() {
                nuevaCestaString.value = nuevaCestaString.value.slice(0, -1);
            }

            function volver() {
                router.push('/');
            }

            function crearCesta() {
                if (nuevaCestaString.value.length > 2) {
                    axios.post('cestas/crearCesta', { nombreCesta: nuevaCestaString.value }).then((res) => {
                        if (res.data.error == false) {
                            nuevaCestaString.value = '';
                            toast.success('Cesta creada');
                            cerrarModal();
                            cargarCestas();
                        } else {
                            toast.error(res.data.mensaje);
                        }
                    }).catch((err) => {
                        console.log(err);
                        toast.error('Error, no se ha podido crear la nueva cesta');
                    });
                } else {
                    toast.error('3 letras mínimo');
                }
            }

            function seleccionarCesta(data) {
                store.dispatch('Cesta/setIdAction', data.idMongo);
                store.dispatch('CestasActivas/setCestasActivasAction', {idMongo: data.idMongo, nombre: data.nombre});
                volver();
            }

            function findMesa(col, row) {
                let nMesa = col;
                if(row !== 1) nMesa = (row * 10) - (10 - col);
                const data = arrayCestas.value.find(i => i.idCestaSincro === `TaulaNom${nMesa}`);
                if(data !== undefined) console.log(data)
                return data !== undefined ? { idMongo: data._id, activada: true, nombre: data.nombreCesta, total: data.lista.reduce((total, o) =>  o.subtotal + total,0) } : { activada: false, nombre: '', total: ''};
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

                for (let i = 0; i < arrayCestas.value[index].lista.length; i++) {
                    subtotal += arrayCestas.value[index].lista[i].subtotal;
                }
                return subtotal.toFixed(2);
            }

            function cargarCestas() {
                axios.get('cestas/getCestas').then((res) => {
                    if (res.data.error == false) {
                        arrayCestas.value = res.data.info;
                        console.log(res.data.info)
                    } else {
                        toast.error(res.data.mensaje);
                    }
                }).catch((err) => {
                    console.log(err);
                    toast.error('Error en get > cestas/getCestas');
                });
            }

            function borrarCesta(index) {
                if(arrayCestas.value.length > 1) {
                    if(confirm('Confirma para borrar la cesta')) {
                        axios.post('cestas/borrarCesta', { id: arrayCestas.value[index]._id }).then((res) => {
                            if (res.data.okey == true) {
                                toast.success('Cesta borrada');
                                cargarCestas();
                            } else {
                                toast.error(res.data.error);
                            }
                        }).catch((err) => {
                            console.log(err);
                            toast.error('Error, no se ha podido borrar la cesta');
                        });
                    }
                } else {
                    toast.info('¡Debe haber una cesta al menos!');
                }
            }

            function abrirModal() {
                modal.show();
            }
            
            function cerrarModal() {
                cargarCestas();
                modal.hide();
            }

            onMounted(() => {
                const modalElement = document.getElementById('modalNuevaCesta');
                if (modalElement != null) {
                    modal = new Modal(modalElement, { keyboard: false });
                }
                cargarCestas();
            });

            return {
                crearCesta,
                borrarLetra,
                nuevaCestaString,
                addText,
                borrarCesta,
                abrirModal,
                cerrarModal,
                seleccionarCesta,
                getTotalPosicion,
                existePosicion,
                nRows,
                arrayCestas,
                volver,
                setActivo,
                findMesa,
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

    .mnemoSize {
        font-size: 1.5em;
        width: 210px;
        font-weight: bold;
    }
    .titleStyle {
        font-size: 25px;
        font-weight: bold;
    }
    .cardMesa {
        border: 1px solid black;
        border-radius: 5px;
        text-align: center;
        width: 7.5vw;
        height: 5vw;
        max-height: 5vw;
        font-size: .8em;
    }
    .cardMesaDisabled {
        border: 1px solid gray;
        border-radius: 5px;
        text-align: center;
        width: 7.5vw;
        height: 5vw;
        max-height: 5vw;
        color: gray;
    }
    .padding0 {
        padding-right: 0;
        padding-left: 0;
    }
    .mesaGeneral {
        cursor: pointer;
    }
</style>
