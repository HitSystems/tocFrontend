<template>
  <div class="container-fluid">
    <div class='row'>
        <div class='col-md-1'>
            <button class='btn btn-info' @click='addProducto()'>Añadir producto</button>
        </div>
        <div class='col-md-1'>
            <button class='btn btn-info' @click='cambiarPrecio()'>Cambiar precio</button>
        </div>
        <div class='col-md-1'>
            <button class='btn btn-info' @click='actualizarEnvioDatos()'>Enviar datos: {{ enviarDatos ? 'SÍ' : 'NO'}}</button>
    </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, onMounted } from 'vue';
import { Modal } from 'bootstrap';
import axios from 'axios';
import router from '../router/index';
import { useStore } from 'vuex';
import { useToast } from 'vue-toastification';

export default {
    name: 'Administracion',
    setup() {
        const enviarDatos = ref(true);
        function addProducto() {

        }
        function cambiarPrecio() {

        }
        function actualizarEnvioDatos() {
            enviarDatos.value = !enviarDatos.value
        }

        return {
            addProducto,
            cambiarPrecio,
            actualizarEnvioDatos,
            enviarDatos,
        };
    },
};
</script>
<style scoped>
.input-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.input-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
}

/* On mouse-over, add a grey background color */
.input-container:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.input-container input:checked ~ .checkmark {
    background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.input-container input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.input-container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>
