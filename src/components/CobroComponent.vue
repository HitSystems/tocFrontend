<template>
  <div class="container-fluid mt-2">
      <div class="row">
          <div class="col-md-12 text-center">
              <img @click="agregar(0.01)" src="../assets/imagenes/1cts.png"
              alt="Moneda 1 cts." :width="sizeMonedas">
              <img @click="agregar(0.02)" src="../assets/imagenes/2cts.png"
              alt="Moneda 2 cts." :width="sizeMonedas" class="mr-2">
              <img @click="agregar(0.05)" src="../assets/imagenes/5cts.png"
              alt="Moneda 5 cts." :width="sizeMonedas" class="mr-2">
              <img @click="agregar(0.1)" src="../assets/imagenes/10cts.png"
              alt="Moneda 10 cts." :width="sizeMonedas" class="mr-2">
              <img @click="agregar(0.2)" src="../assets/imagenes/20cts.png"
              alt="Moneda 20 cts." :width="sizeMonedas" class="mr-2">
              <img @click="agregar(0.5)" src="../assets/imagenes/50cts.png"
              alt="Moneda 50 cts." :width="sizeMonedas" class="mr-2">
              <img @click="agregar(1)" src="../assets/imagenes/uneuro.png"
              alt="Moneda 1 euro" :width="sizeMonedas" class="mr-2">
              <img @click="agregar(2)" src="../assets/imagenes/doseuros.png"
              alt="Moneda 2 euros" :width="sizeMonedas" class="mr-2">
          </div>
      </div>
      <div class="row">
          <div class="col-md-12 text-center">
              <img @click="agregar(5)" src="../assets/imagenes/5euros.png"
              alt="Billete 5 euros" :width="sizeBilletes">
              <img @click="agregar(10)" src="../assets/imagenes/10euros.png"
              alt="Billete 10 euros" :width="sizeBilletes" class="p-2">
              <img @click="agregar(20)" src="../assets/imagenes/20euros.png"
              alt="Billete 20 euros" :width="sizeBilletes" class="p-2">
              <img @click="agregar(50)" src="../assets/imagenes/50euros.png"
              alt="Billete 50 euros" :width="sizeBilletes" class="p-2">
              <img @click="agregar(100)" src="../assets/imagenes/100euros.png"
              alt="Billete 100 euros" :width="sizeBilletes" class="p-2">
              <img @click="agregar(200)" src="../assets/imagenes/200euros.png"
              alt="Billete 200 euros" :width="sizeBilletes" class="p-2">
              <img @click="agregar(500)" src="../assets/imagenes/500euros.png"
              alt="Billete 500 euros" :width="sizeBilletes" class="p-2">
          </div>
      </div>
      <div class="row">
          <div class="col-md-7">
              <div class="row">
                  <div class="col" style="max-width: 325px;">
                      <div class="btn-group-vertical" role="group">
                          <div class="btn-group">
                              <a class="botonEze botonesCalculadora"
                               @click="agregarTecla('7')">7</a>
                              <a class="botonEze botonesCalculadora"
                              @click="agregarTecla('8')">8</a>
                              <a class="botonEze botonesCalculadora"
                               @click="agregarTecla('9')">9</a>
                          </div>
                          <div class="btn-group">
                              <a class="botonEze botonesCalculadora"
                               @click="agregarTecla('4')">4</a>
                              <a class="botonEze botonesCalculadora"
                               @click="agregarTecla('5')">5</a>
                              <a class="botonEze botonesCalculadora"
                               @click="agregarTecla('6')">6</a>
                          </div>
                          <div class="btn-group">
                              <a class="botonEze botonesCalculadora"
                               @click="agregarTecla('1')">1</a>
                              <a class="botonEze botonesCalculadora"
                               @click="agregarTecla('2')">2</a>
                              <a class="botonEze botonesCalculadora"
                               @click="agregarTecla('3')">3</a>
                          </div>
                          <div class="btn-group">
                              <a class="botonEze botonesCalculadora"
                               @click="borrarCuentas()">C</a>
                              <a class="botonEze botonesCalculadora"
                               @click="agregarTecla('0')">0</a>
                              <a class="botonEze botonesCalculadora"
                               @click="agregarComa('.')">,</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6 pt-2 text-start colorTexto">
                      <span style="font-size: 32px;" class="fw-bold">
                        Total: {{Number(total).toFixed(2)}} €
                      </span><br>
                      <span style="font-size: 32px;" class="fw-bold">
                        Dinero recibido: {{(cuenta+totalTkrs)}} €
                      </span><br>
                      <span style="font-size: 32px;" class="fw-bold">
                        Ticket Restaurant: {{totalTkrs}} €
                      </span><br>
                      <span v-if="faltaOSobra" class="fw-bold"
                      style="font-size: 32px; color:red;">
                        Faltan: {{(total-(totalTkrs+cuenta))}} €
                      </span>
                      <span v-else
                      class="fw-bold"
                      style="font-size: 32px; color: green;">
                        Sobran: {{sobranX.toFixed(2)}} €
                      </span>
                  </div>
              </div>
          </div>
          <div class="col-md-5">
            <div v-if="esVIP === false && esDevolucion === false
            && esConsumoPersonal === false
            && botonesCobroActivo && tkrs === false" class="row">
                <div class="col-md-6 text-center">
                    <img v-if="metodoPagoActivo == 'EFECTIVO'"
                    @click="setMetodoPago('EFECTIVO')"
                    src="../assets/imagenes/img-efectivo.png"
                    alt="Cobrar con efectivo" width="185">
                    <img v-else @click="setMetodoPago('EFECTIVO')"
                    src="../assets/imagenes/img-efectivo-disabled.png"
                    alt="Cobrar con efectivo" width="185">
                </div>
                <div class="col-md-6 text-center">
                    <img v-if="metodoPagoActivo == 'TARJETA'"
                    @click="setMetodoPago('TARJETA')"
                    src="../assets/imagenes/img-tarjetas.png"
                    alt="Cobrar con tarjeta" width="185">
                    <img v-else @click="setMetodoPago('TARJETA')"
                    src="../assets/imagenes/img-tarjetas-disabled.png"
                    alt="Cobrar con tarjeta" width="185">
                </div>
            </div>
            <div class="row mt-2">
              <div class="col text-center">
                <img
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                  src="../assets/imagenes/img-restaurant.png"
                  alt="tkrs" width="185">
              </div>
            </div>
            <div class="row mt-2" :class="{'datafonoEsperando': !esperando}">
              <div class="col text-center">
                <img src="../assets/imagenes/loading.gif"
                 alt="Esperando respuesta del datáfono">
              </div>
            </div>
          </div>
      </div>
  </div>
  <div class="position-absolute bottom-0 start-0 mb-2" style="position: absolute;">
      <div class="ms-2 mb-2 row" role="group" aria-label="First group">
        <div class='col'>
          <button type="button" class="btn btn-dark ms-2 botonesPrincipales" @click="enviarACocina()">Enviar a cocina</button>
        </div>
      </div>
      <div class="row ms-2" role="group" aria-label="First group">
        <div class='col'>
        <button type="button"
        @click="volver()"
        class="btn btn-warning ms-4 botonesPrincipales">Volver</button>
        <button type="button"
          @click="reset()"
          class="btn btn-danger ms-4 botonesPrincipales">Reset
        </button>
        </div>
      </div>
  </div>

  <div class="position-absolute bottom-0 end-0 mb-2 me-2">
      <div class="col-md-12 text-center">
        <button
          @click="cobrar()"
          class="btn btn-secondary w-100 totalStyle botonCobrar menusColorIvan">
          Cobrar {{cobrarVariable}} €
        </button>
      </div>
  </div>

  <!-- MODAL TKRS -->
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Importe del ticket restaurant</h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text">Cantidad</span>
            <input type="number"
            v-model="totalTkrs" class="form-control" style="font-size: 45px">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-lg"
           data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary btn-lg"
           data-bs-dismiss="modal"
           @click="configurarCantidad()">Aceptar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

import {
  computed,
  ref,
  onMounted,
  watchEffect,
} from 'vue';
import { useToast } from "vue-toastification";
import router from '../router/index';
import { socket, emitSocket } from '../sockets/socket';

export default {
  name: 'CobroComponent',
  setup() {
    const toast = useToast();
    const route = useRoute();
    const store = useStore();
    const { total } = route.params;
    const modoActual = store.getters['getModoActual'];
    const infoCliente = store.getters['Clientes/getInfoCliente'];
    const sizeMonedas = '100';
    const sizeBilletes = '150';
    const esVIP = false;
    const esDevolucion = false;
    const esConsumoPersonal = false;
    let botonesCobroActivo = true;
    const tkrs = ref(false);
    const cuentaAsistenteV = ref(0);
    const cuentaAsistenteTecladoV = ref(0);
    const metodoPagoActivo = ref('EFECTIVO');
    const totalTkrs = ref(0);
    const cuenta = ref(0);
    const arrayFichados = ref([]);
    const esperando = computed(() => store.state.esperandoDatafono); // ref(false);
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

    function getCestaId() {
      return axios.get('cestas/getCestaCurrentTrabajador').then((res) => {
        if (!res.data.error) {
          return res.data.info._id;
        } else {
          console.log(res.data.mensaje);
          return -1;
        }
      }).catch((err) => {
        console.log(err);
        toast.error(err.message);
        return -1;
      });
    }

    function reset() {
      cuentaAsistenteV.value = 0;
      cuentaAsistenteTecladoV.value = 0;
      totalTkrs.value = 0;
      cuenta.value = 0;
    }

    function agregarTecla(x) {
      cuentaAsistenteTecladoV.value = String(Number(cuentaAsistenteTecladoV.value + x));
    }

    function volver() {
      router.push('/');
    }

    function agregarComa() {
      if (tkrs.value) totalTkrs.value = `${totalTkrs.value.replace('.', '')}.`;
      else cuentaAsistenteTecladoV.value = `${cuentaAsistenteTecladoV.value.replace('.', '')}.`;
    }

    function setTotalTkrs(x) {
      totalTkrs.value = x;
    }

    function configurarCantidad() {
      const cantidadLimpia = Number(totalTkrs.value);
      if (cantidadLimpia > 0) {
        setTotalTkrs(cantidadLimpia);
      } else {
        console.log('Importe ticket restaurant incorrecto');
      }
    }

    function agregar(x) {
      cuentaAsistenteV.value += x;
    }

    function alternarTkrs() {
      if (tkrs.value) {
        tkrs.value = false;
        metodoPagoActivo.value = 'EFECTIVO';
      } else {
        metodoPagoActivo.value = 'TICKET_RESTAURANT';
        tkrs.value = true;
      }

      // this.ocultarModal();
      // vueTecladoTkrs.abreModal();
    }

    function borrarCuentas() {
      totalTkrs.value = 0;
      cuentaAsistenteV.value = 0;
      cuentaAsistenteTecladoV.value = 0;
    }

    function setMetodoPago(tipoNuevo) {
      metodoPagoActivo.value = tipoNuevo;
    }

    const cobrarVariable = computed(() => {
      if (total - totalTkrs.value <= 0) return 0;
      return (total - totalTkrs.value).toFixed(2).replace('.', ',');
    });

    const sobranX = computed(() => {
      if (tkrs.value) {
        if (total - totalTkrs.value) {
          botonesCobroActivo = true;
          return cuenta.value + totalTkrs.value + total;
        }
        botonesCobroActivo = false;
        return cuenta.value;
      }
      return cuenta.value + totalTkrs.value - total;
    });

    const faltaOSobra = computed(() => {
      if (cuenta.value + totalTkrs.value - total < 0) {
        return true;
      }
      return false;
    });

    const cuentaAsistente = watchEffect(() => {
      cuenta.value = cuentaAsistenteV.value;
    });

    const cuentaAsistenteTeclado = watchEffect(() => {
      cuenta.value = Number(cuentaAsistenteTecladoV.value);
    });

    function setEsperando(payload) {
      store.dispatch('setEsperandoDatafono', payload);
    }

    function checkPaytefResponse(paytef) {
      if (!paytef.data.error) {
        if (!paytef.data.continuo) {
          store.dispatch('setEsperandoDatafono', false);
          store.dispatch('Cesta/setIdAction', -1);
          store.dispatch('setModoActual', 'NORMAL');
          store.dispatch('Clientes/resetClienteActivo');
          store.dispatch('Footer/resetMenuActivo');
          router.push({ name: 'Home', params: { tipoToast: 'success', mensajeToast: 'Ticket creado' } });
        }
        return paytef.data.continuo;
      } else {
        toast.error(paytef.data.mensaje);
        store.dispatch('setEsperandoDatafono', false);
        return false;
      }
    }

    function consultaFinalPaytef() {
      axios.get('paytef/resultadoFinal').then((res) => {
        store.dispatch('setEsperandoDatafono', false);

        if (res.data.error == false) {
          store.dispatch('Cesta/setIdAction', -1);
          store.dispatch('setModoActual', 'NORMAL');
          store.dispatch('Clientes/resetClienteActivo');
          store.dispatch('Footer/resetMenuActivo');
          router.push({ name: 'Home', params: { tipoToast: 'success', mensajeToast: 'Ticket creado' } });
        } else {
          toast.error(res.data.mensaje);
        }
      }).catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
    }

    async function consultarPaytef() {
      setEsperando(true);
      let resPolling = null;
      do {
        resPolling = checkPaytefResponse(await axios.get('paytef/polling'))
      } while(resPolling);

      // consultaFinalPaytef();
    }

    async function cobrar() {
      if (!esperando.value) {
        let cestaId = await getCestaId();
        if (totalTkrs.value > 0 && await cestaId != -1) { /* Ticket restaurant activo */
          const data = {
            total: Number(total),
            totalTkrs: totalTkrs.value,
            idCesta: cestaId,
            idCliente: infoCliente,
          }

          axios.post('tickets/crearTicketTKRS', data).then((res) => {
            if(!res.data.error) {
              reset();
              try {
                axios.post('impresora/abrirCajon');
              } catch (err) {
                toast.error('No se ha podido abrir el cajón.');
              }
              toast.success('Ticket OK');
              router.push('/');
              } else {
              toast.error('Error al insertar el ticket.');
            }
          }).catch((err) => {
            console.log(err);
            toast.error('Error');
          });
          // toc.crearTicket(this.metodoPagoActivo, Number(vueCesta.getTotalEstatico()),
          // {tkrs: true, totalTkrs: this.totalTkrs, tipoPago: this.metodoPagoActivo});
        } else { // Sin ticket restaurant (normal)
          if (metodoPagoActivo.value === 'EFECTIVO') {
            axios.post('tickets/crearTicketEfectivo', {
              total: Number(total),
              idCesta: cestaId,
              idCliente: infoCliente
            }).then((res) => {
              if (!res.data.error) {
                reset();
                try {
                  axios.post('impresora/abrirCajon');
                } catch(err) {
                  toast.error('No se ha podido abrir el cajón');
                }
                toast.success('Ticket OK');
                router.push('/');
              } else {
                toast.error('Error al insertar el ticket');
              }
            }).catch((err) => {
              console.log(err);
              toast.error('Error');
            });
          }

          if (metodoPagoActivo.value === 'TARJETA 3G') {
            axios.post('tickets/crearTicketDatafono3G', {
              total: Number(total),
              idCesta: cestaId,
              idCliente: infoCliente
            }).then((res) => {
              if (!res.data.error) {
                reset();
                router.push({ name: 'Home', params: { tipoToast: 'success', mensajeToast: 'Ticket creado' } });
              } else {
                toast.error('Error al insertar el ticket');
              }
            }).catch((err) => {
              console.log(err);
              toast.error('Error');
            });
          }

          if (metodoPagoActivo.value === 'TARJETA') {
            axios.post('parametros/getParametros').then((resParams) => {
              if (resParams.data.parametros != undefined || resParams.data.parametros != null) {
                if (resParams.data.parametros.tipoDatafono == 'CLEARONE') {
                  emitSocket('enviarAlDatafono', { total: Number(total), idCesta: cestaId, idClienteFinal: infoCliente });
                  setEsperando(true);
                } else if (resParams.data.parametros.tipoDatafono == 'PAYTEF') {
                  axios.post('paytef/iniciarTransaccion', { idClienteFinal: infoCliente }).then((resPaytef) => {
                    if (resPaytef.data.error == true) {
                      toast.error(resPaytef.data.mensaje);
                    } else {
                      store.dispatch('setEsperandoDatafono', true);
                      consultarPaytef();
                    }
                  }).catch((err) => {
                    console.log(err);
                    toast.error('Error POST iniciarTransaccion');
                  });
                }
              } else {
                toast.error('Datáfono no definido en los parámetros');
              }
            }).catch((err) => {
              console.log(err);
              toast.error('Error de getParametros datáfono');
            });
          }

          // toc.crearTicket(this.metodoPagoActivo, Number(vueCesta.getTotalEstatico()),
          // {tkrs: false});
        }
        // console.log('el total es: ', Number(vueCesta.getTotalEstatico()));
      } else {
        // vueToast.abrir('danger', 'Ya existe una operación en curso');
      }
    }

    async function reset() {
      const res = await axios.post('trabajadores/getCurrentTrabajador', {});
      if (!res.data.error) {
        store.dispatch('CestasActivas/deleteCestaActivaAction', res.data.trabajador.idTrabajador);
      } else {
        toast.error(res.data.mensaje);
      }
      
      store.dispatch('Cesta/setIdAction', -1);
      store.dispatch('setModoActual', 'NORMAL');
      store.dispatch('Clientes/resetClienteActivo');
      store.dispatch('Footer/resetMenuActivo');
      axios.post('promociones/setEstadoPromociones', { estadoPromociones: true });
    }

    function enviarACocina() {
      axios.post('cestas/enviarACocina', { idCesta: cestaID.value }).then((res) => {
        if(!res.error) {
          toast.success('OK.');
          volver();
        }
        else toast.error('Error al enviar el pedido a cocina.')
      })
    }

    function test() {
      console.log('test vacío');
    }
    onMounted(() => {
      // socket.on('resDatafono', (data) => {
      //   console.log(data);
      //   if (!data.error) {
      //     router.push('/');
      //   } else {
      //     console.log('Error: ', data.mensaje);
      //   }
      // });
      axios.post('/trabajadores/getTrabajadoresFichados').then((res) => {
        if (!res.data.error) {
          if (res.data.res.length > 0) {
            console.log(res.data.res);
          } else {
            console.log('No hay trabajadores fichados');
          }
        } else {
          console.log('Error!');
        }
      }).catch((err) => {
          console.log(err);
      });
    });

    return {
      test,
      total,
      sizeBilletes,
      sizeMonedas,
      esVIP,
      esDevolucion,
      esConsumoPersonal,
      botonesCobroActivo,
      tkrs,
      agregarTecla,
      agregarComa,
      agregar,
      cobrarVariable,
      sobranX,
      faltaOSobra,
      cuentaAsistente,
      cuentaAsistenteTeclado,
      cuenta,
      totalTkrs,
      borrarCuentas,
      setMetodoPago,
      metodoPagoActivo,
      alternarTkrs,
      configurarCantidad,
      reset,
      arrayFichados,
      volver,
      cobrar,
      esperando,
      enviarACocina,
    };
  },
};
</script>
<style scoped>
  .botonesCalculadora {
    background-color: #fff5e9;
    color: #c95907;
    border-width: 3px;
    border: 1px solid #bf5c18;
  }

  .botonesPrincipales {
    font-size: 50px;
  }

  .colorTexto {
    color: #c95907;
  }

  .totalStyle {
    font-size: 60px;
    font-weight: bold;
  }

  .botonCobrar{
    background-color: #fff5e9;
    color: #c95907;
    border-color: #bf5c18;
    border-width: 3px;
  }

  .datafonoEsperando {
    display: none;
  }
</style>
