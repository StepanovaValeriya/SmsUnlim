<template>
  <div>
    <nav>
      <div class="nav-wrapper teal lighten-1">
        <div class="container">
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"
            ><i class="material-icons">menu</i></a
          >
          <router-link to="/" class="brand-logo">SmsUnlim</router-link>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <Menu @modal="$emit('modal')"></Menu>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';

export default {
  name: 'navbar',

  methods: {},

  components: { Menu },
};
</script>
