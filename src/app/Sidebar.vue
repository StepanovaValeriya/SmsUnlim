<template>
  <div class="main-sidebar">
    <form class="main-sidebar-form">
      <div class="form-field form-country">
        <input
          id="form-input-country"
          type="text"
          placeholder="Выбрать страну"
        />
        <button class="main-sidebar-button" type="submit">
          <i class="material-icons">search</i>
        </button>
      </div>
      <div class="form-field form-operator">
        <select id="form-select">
          <option value="tele2">Tele2</option>
          <option value="mts">MTS</option>
          <option value="megafone">Megafone</option>
        </select>
      </div>
      <div class="form-field form-search">
        <input
          id="form-input-search"
          type="text"
          placeholder="Выбарть сервис"
        />
        <button class="main-sidebar-button" type="submit">
          <i class="material-icons">search</i>
        </button>
      </div>
      <!-- ==============api============== -->
      <div class="form-field form-api">
        <input id="form-input-api" type="text" />
        <button @click="changeApiKey" class="main-sidebar-button" type="submit">
          Изменить ApiKey
        </button>
      </div>
      <!-- ================================= -->
    </form>
    <div class="main-sidebar-social social">
      <ul class="social-list"></ul>
      <li class="social-item clearfix">
        <img src="../assets/facebook.svg" alt="facebook" />
        <h4>Facebook</h4>
        <span class="social-price">20 руб</span>
        <span class="social-amount">10 шт</span>
      </li>
      <li class="social-item clearfix">
        <img src="../assets/instagramm.svg" alt="instagram" />
        <h4>Instagram</h4>
        <span class="social-price">20 руб</span>
        <span class="social-amount">10 шт</span>
      </li>
      <li class="social-item clearfix">
        <img src="../assets/twitter.svg" alt="twitter" />
        <h4>Twitter</h4>
        <span class="social-price">20 руб</span>
        <span class="social-amount">10 шт</span>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {};
  },
  methods: {
    changeApiKey() {
      this.$store.dispatch('changeApiKey');
    },
  },
};
</script>
