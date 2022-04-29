<template>
  <div>
    <ul class="sidenav" id="mobile-demo" ref="mobileMenu">
      <Menu @modal="$emit('modal')"></Menu>
    </ul>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';
export default {
  name: 'sidenav',
  props: {},
  data() {
    return {
      mobileMenu: null,
    };
  },

  mounted() {
    this.mobileMenu = M.Sidenav.init(this.$refs.mobileMenu);
  },
  components: { Menu },
};
</script>
