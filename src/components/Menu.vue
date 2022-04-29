<template>
  <div>
    <li>
      <router-link
        to="/"
        class="waves-effect waves-orange pointer modal-trigger"
        >Главная</router-link
      >
    </li>
    <li v-if="isAuth">
      <router-link
        to="/history"
        class="waves-effect waves-orange pointer modal-trigger"
        >История</router-link
      >
    </li>
    <li v-if="isAuth">
      <router-link
        to="/activation"
        class="waves-effect waves-orange pointer modal-trigger"
        >Активации</router-link
      >
    </li>

    <li v-if="!isAuth">
      <a
        @click.prevent="$emit('modal')"
        class="waves-effect waves-orange pointer modal-trigger"
        >Вход / Регистрация</a
      >
    </li>

    <li v-if="isAuth"><Profile></Profile></li>
  </div>
</template>

<script>
import Profile from './Profile.vue';
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    isAuth() {
      return this.$store.getters.isAuthenticated;
    },
  },
  components: { Profile },
};
</script>
