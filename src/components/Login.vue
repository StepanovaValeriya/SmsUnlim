<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <button class="modal-default-button" @click.prevent="$emit('close')">
        <i class="material-icons">close</i>
      </button>
      <span class="card-title">SmsUnlim</span>
      <div class="input-field">
        <input
          v-model.trim="v$.email.$model"
          id="email"
          type="text"
          :class="{
            invalid: v$.email.$error,
          }"
        />
        <label for="email">Email</label>
        <small v-if="v$.email.$error" class="helper-text invalid"
          >Неверный адрес эл.почты</small
        >
      </div>
      <div class="input-field input-field-password">
        <input
          v-model.trim="v$.password.$model"
          id="password"
          :type="passwordFieldType"
          :class="{
            invalid: v$.password.$error,
          }"
        />

        <i
          v-if="passwordFieldType === 'password'"
          @click="switchVisibility"
          class="material-icons material-icons-password"
          >visibility</i
        >
        <i
          v-else-if="passwordFieldType === 'text'"
          @click="switchVisibility"
          class="material-icons material-icons-password"
          >visibility_off</i
        >

        <label for="password">Пароль</label>
        <small v-if="v$.password.$error" class="helper-text invalid"
          >Неверный пароль либо поле не было заполнено</small
        >
      </div>
      <p>
        <label>
          <input type="checkbox" class="filled-in" v-model="rememberMe" />
          <span>Запомнить меня</span>
        </label>
      </p>
    </div>

    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>
      <p class="center">
        <a href="#">Забыли пароль?</a>
      </p>

      <p class="center">
        Нет аккаунта?
        <a @click.prevent="$emit('register')" href="#">Зарегистрироваться</a>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import showPasswordMixin from '../mixins/showPasswordMixin';
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  name: 'login',
  mixins: [showPasswordMixin],
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
    };
  },
  validations() {
    return {
      email: { email, required },
      password: { required, minLength: minLength(6) },
    };
  },

  methods: {
    async submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
      };
      await this.$store
        .dispatch('login', formData)

        .then(() => {
          this.$router.push('/');
          if (this.$store.getters.isAuthenticated === true) {
            this.$emit('close');
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
