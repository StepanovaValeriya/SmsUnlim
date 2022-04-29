<template>
  <div>
    <a class="dropdown-trigger" href="#" data-target="dropdown1" ref="dropdown"
      >{{ email }}<i class="material-icons right">arrow_drop_down</i></a
    >

    <ul id="dropdown1" class="dropdown-content">
      <li class="divider"></li>
      <li>
        <p href="#">Баланс: {{ balance }} RUB</p>
      </li>
      <li><a href="#">Настройки</a></li>
      <li><a href="#" @click.prevent="logout">Выход</a></li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'profile',
  data() {
    return {};
  },
  computed: {
    email() {
      return this.$store.getters.email;
    },
    balance() {
      return this.$store.getters.balance;
    },
  },
  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      coverTrigger: false,
      constrainWidth: false,
    });
    this.getBalance();
  },

  methods: {
    ...mapActions(['getBalance']),
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/');
    },
  },
};
</script>
