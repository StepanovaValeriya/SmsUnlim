<template>
  <div class="wrapper">
    <main>
      <Sidenav @modal="showModal"></Sidenav>
      <Navbar @modal="showModal"></Navbar>

      <div class="container main-page">
        <Sidebar></Sidebar>

        <Modal v-model="isShowModal" @close="isShowModal = false"></Modal>
        <router-view></router-view>
      </div>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './app/Navbar.vue';
import Sidebar from './app/Sidebar.vue';
import Footer from './app/Footer.vue';
import Modal from './app/Modal.vue';
import Sidenav from './app/Sidenav.vue';
import messages from './utils/messages.js';
export default {
  data() {
    return {
      isShowModal: false,
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(error) {
      this.$message(messages[error.response.status] || 'Что-то пошло не так');
    },
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
  },
  components: { Sidenav, Footer, Navbar, Modal, Sidebar },
};
</script>

<style lang="scss">
@import 'materialize-css/dist/css/materialize.min.css';
@import './styles/main.css';
</style>
