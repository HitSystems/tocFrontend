<template>
<div class="modal" id="modalEncargos" tabindex="-1" role="dialog">
		<div class="modal-dialog" style="max-width: 80%" role="document">
			<div class="modal-content encargos">
				<!--<div class="modal-header"> btn btn-dark btn-block 
					<h5 class="modal-title">Nuevo encargo</h5>
				</div>-->
                <div class='modal-body'>
                    <div class="row">
                        <div class="col">
                            <img src="../assets/imagenes/logoEncargo.png">
                        </div>
                        <div class="col">
                            <h1 v-if="cliente !== null"><button class="btnEncargo lgEncargo float-right" @click="abreModalClientes()">{{cliente.nombre}}</button></h1>
                            <button v-else class="btnEncargo float-right" @click="abreModalClientes()"><i class="fas fa-search"></i></button>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <hr class="hrEncargo"/>
                    <div class="row align-items-center">
                        <div class="col-md-5">
                            <input type="radio" id="hoy" class="btn-check hideCircleButton" name="opcion" value="hoy" @change="changeOption($event)" :checked="hoy" autocomplete="off">
                            <label class="opcionesEncargo fancyBorder1 optionHoy" for="hoy">Hoy</label>
                            <br/>
                            <input type="radio" id="dia" class="btn-check hideCircleButton" name="opcion" value="dia" @change="changeOption($event)" :checked="dia" autocomplete="off">
                            <label class="opcionesEncargo fancyBorder2 optionDia" for="dia">Otro día</label>
                            <br/>
                            <input type="radio" id="repeticion" class="btn-check hideCircleButton" name="opcion" value="repeticion" @change="changeOption($event)" :checked="repeticion" autocomplete="off">
                            <label class="opcionesEncargo fancyBorder3 optionRepeticion" for="repeticion">Cada...</label>
                            <br/>
                            <br/>
                        </div>
                        <div class="col-md-5">
                            <div v-if="hoy">
                                <input type="radio" id="am" class="btn-check hideCircleButton2" name="franja" value="am" :checked="am" v-model="franja" autocomplete="off">
                                <label class="opcionesEncargo lgEncargo fancyBorder4 optionAm" for="am">Durante la mañana</label>
                                <input type="radio" id="pm" class="btn-check hideCircleButton2" name="franja" value="pm" :checked="pm" v-model="franja" autocomplete="off">
                                <label class="opcionesEncargo lgEncargo fancyBorder5 optionPm" for="pm">Durante la tarde</label>
                            </div>
                            <div v-if="dia">
                                <input type="date" id="fechaEncargo" v-model="fechaInput">
                                <input type="time" id="horaEncargo" v-model="horaInput">                            
                            </div>
                            <div v-if="repeticion">
                                <div v-for="(item, index) in dias" :key="index">
                                    <input type="checkbox" class="round-checkbox" :id="item.dia" v-model="item.checked">
                                    <label class="diaCheckbox">{{ item.dia }}</label>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <hr class="hrEncargo"/>
                    <div class="row">
                        <div class="col-md">
                            <small id="emailHelp" class="form-text text-muted">Deja a cuenta:</small>
                            <input type="number" class="form-control" id="cuenta" name="dejaACuenta" placeholder="0" min="0" v-model="dejaACuenta">
                        </div>
                        <div class="col-md">
                            <small id="emailHelp" class="form-text text-muted">Comentario:</small>
                            <input type="text" class="form-control" name="comentario" placeholder="Introduce aquí el comentario" v-model="comentario">
                        </div>
                        <div class="col-md">
                            <input type="button" value="Salir" class="btn btn-danger btn-lg" @click="cerrarModal()">
                            <input type="button" value="Crear encargo" class="btn btn-primary btn-lg" @click="crearEncargo()">
                        </div>
                    </div>
			</div>
			</div>
			</div>
			</div>
</template>
<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';

export default {
    name: 'EncargosComponent',
    setup() {
        const cantidad = ref(0);
        const concepto = ref('');
        let modalEncargos = null;
        let dias = [
            {dia: 'Lunes', nDia: 0, checked: false},
            {dia: 'Martes', nDia: 1, checked: false},
            {dia: 'Miércoles', nDia: 2, checked: false},
            {dia: 'Jueves', nDia: 3, checked: false},
            {dia: 'Viernes', nDia: 4, checked: false},
            {dia: 'Sábado', nDia: 5, checked: false},
            {dia: 'Domingo', nDia: 6, checked: false}
        ];
        let cliente = {nombre: 'test'};
        let hoy = true;
        let dia = false;
        let repeticion = false;
        let am = true;
        let pm = false;
        let franja = '';
        let fechaEncargo = [];
        let articulos = [];
        let precioEncargo = 0;
        let fechaInput = '';
        let horaInput = '';
        let dejaACuenta = 0;
        let comentario = '';

        function cerrarModal() {
            modalEncargos.hide();
        }
        
        function abreModalClientes() {
            console.log('Hola');
        }

        function crearEncargo() {
            console.log('Holita');
        }

        function changeOption(event) {
            if(event.target.value === 'hoy') {
                this.hoy = true;
                this.dia = false;
                this.repeticion = false;
            } else if(event.target.value === 'dia') {
                this.hoy = false;
                this.dia = true;
                this.repeticion = false;
            } else if(event.target.value === 'repeticion') {
                this.hoy = false;
                this.dia = false;
                this.repeticion = true;
            }
        }

        function confirmarEntrada() {
            axios.post('movimientos/nuevaEntrada', {
                cantidad: Number(cantidad.value),
                concepto: concepto.value
            }).then((res) => {
                if (!res.data.error) {
                    console.log('Entrada OK');
                    cerrarModal();
                } else {
                    alert(res.data.mensaje);
                }
            }).catch((err) => {
                console.log(err);
                alert('Error movimientos/nuevaEntrada');
            });
        }

        onMounted(() => {
            modalEntradaDinero = new Modal(document.getElementById('modalEntradaDinero'));
        });

        return {
            abreModalClientes,
            crearEncargo,
            changeOption,
            dias,
            cliente,
            hoy,
            dia,
            repeticion,
            am,
            pm,
            franja,
            fechaEncargo,
            articulos,
            precioEncargo,
            fechaInput,
            horaInput,
            dejaACuenta,
            comentario,
        };
    },
};
</script>

<style scoped>
.encargos {
    font-family: 'Alegreya', serif;
    background: url('../assets/imagenes/fondoEncargo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
.btnEncargo {
    margin-top: 20px;
    width: 100px;
    height: 80px;
    border-radius: 30% 70% 39% 61% / 30% 69% 31% 70%;
    background: rgb(53, 21, 10);
    border: 3px solid rgb(53, 21, 10);
    color: rgb(228, 212, 185);
    font-size: 32px;
}
.opcionesEncargo {
    margin-top: 20px;
    width: 100px;
    height: 80px;
    background: rgba(53, 21, 10, .3);
    color: rgb(228, 212, 185);
    font-size: 20px;
    line-height: 70px;
    text-align: center;
}
.lgEncargo {
    width: 200px;
    height: 120px;
    font-size: 24px;
    border-radius: 19% 81% 28% 72% / 57% 33% 67% 43%;
    line-height: 100px;
    text-align: center;
}
.fancyBorder1 {
    border-radius: 58% 42% 42% 58% / 69% 56% 44% 31%;
}
.fancyBorder2 {
    border-radius: 55% 45% 30% 70% / 65% 46% 54% 35%;
}
.fancyBorder3 {
    border-radius: 55% 45% 55% 45% / 45% 72% 28% 55%;
}
.fancyBorder4 {
    border-radius: 51% 49% 61% 39% / 52% 52% 48% 48%;
    margin-right: 70px;
}
.fancyBorder5 {
    border-radius: 29% 71% 30% 70% / 61% 43% 57% 39%;
}
.hrEncargo {
    height: 1.5px;
    background-color: rgb(173, 150, 122);
    border: none;
}
.hideCircleButton, .hideCircleButton2 {
    display: none;
}
#hoy:checked ~ .optionHoy,
#dia:checked ~ .optionDia,
#repeticion:checked ~ .optionRepeticion {
    background: rgb(53, 21, 10);
}
#am:checked ~ .optionAm,
#pm:checked ~ .optionPm {
    background: rgb(53, 21, 10);
}
#fechaEncargo, #horaEncargo {
    border: none;
    background: rgb(53, 21, 10);
    border-radius: 5px;
    height: 50px;
    width: 175px;
    color: rgb(228, 212, 185);
    text-align: center;
    font-size: 20px;
}
#fechaEncargo:focus, #horaEncargo:focus {
    outline: none;
    border: none;
}
.round-checkbox {
    width: 1.3em;
    height: 1.3em;
    background-color: rgb(228, 212, 185);
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}
.round-checkbox:checked {
    background-color: rgb(53, 21, 10);
    border: 2px solid rgb(182, 159, 121);
}
.diaCheckbox {
    color: rgb(53, 21, 10);
    font-size: 24px;
}
</style>