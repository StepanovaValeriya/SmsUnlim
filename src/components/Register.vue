<template>
  <div>
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
            >Пароль должен содержать заглавные и строчные латинские буквы. Длина
            пароля должна быть не менее 8 символов</small
          >
        </div>
        <div class="input-field">
          <input
            v-model.trim="v$.passwordConfirm.$model"
            id="password"
            :type="passwordFieldType"
            :class="{
              invalid: v$.passwordConfirm.$error,
            }"
          />
          <label for="passwordConfirm">Подтверждение пароля</label>
          <small v-if="v$.passwordConfirm.$error" class="helper-text invalid"
            >Пароли не совпадают</small
          >
        </div>
        <p>
          <label>
            <input type="checkbox" v-model="v$.agree.$model" />
            <span>С правилами согласен</span>
          </label>
        </p>
      </div>
      <div class="card-action">
        <div>
          <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
          >
            Зарегистрироваться
            <i class="material-icons right">send</i>
          </button>
        </div>

        <p class="center">
          Уже есть аккаунт?
          <a @click.prevent="$emit('login')" href="#">Войти!</a>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';
import showPasswordMixin from '../mixins/showPasswordMixin';

export default {
  name: 'register',
  mixins: [showPasswordMixin],
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      agree: false,
    };
  },
  validations() {
    return {
      email: { email, required },
      password: {
        required,
        minLength: minLength(8),
        containsUppercase: function (value) {
          return /[A-Z]/.test(value);
        },
        containsLowercase: function (value) {
          return /[a-z]/.test(value);
        },
      },
      passwordConfirm: {
        sameAsPassword: sameAs(this.password),
      },

      agree: { checked: (v) => v },
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
        passwordConfirm: this.passwordConfirm,
      };
      await this.$store
        .dispatch('register', formData)
        .then(() => {
          this.$router.push('/');
          if (response.status === 200) {
            this.$emit('close');
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
