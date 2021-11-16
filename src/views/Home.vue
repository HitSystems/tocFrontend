<template>
  <div>
    <Teclas />
    <ModalPeso />
    <ModalSuplementos />
    <Footer />
    <ToastComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Teclas from '@/components/Teclas.vue'; // @ is an alias to /src
import ModalPeso from '@/components/ModalPeso.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue'; // @ is an alias to /src
import ToastComponent from '@/components/Toast.vue';
import ModalSuplementos from '@/components/ModalSuplementos.vue';

export default {
  name: 'Home',
  components: {
    Teclas,
    ModalPeso,
    Footer,
    ToastComponent,
    ModalSuplementos,
  },
};
</script>
