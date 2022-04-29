<template>
  <div>
    <Transition name="modal">
      <div v-if="modelValue" class="modal-mask">
        <div class="modal-wrapper">
          <Login @close="$emit('close')" @register="toRegister"></Login>
          <Register
            v-if="isRegisterShow"
            @close="$emit('close'), (isRegisterShow = false)"
            @login="isRegisterShow = false"
          ></Register>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
export default {
  name: 'modal',
  props: ['modelValue'],

  data() {
    return {
      isRegisterShow: false,
    };
  },
  methods: {
    toRegister() {
      this.isRegisterShow = true;
    },
  },
  created() {},
  components: { Login, Register },
};
</script>
