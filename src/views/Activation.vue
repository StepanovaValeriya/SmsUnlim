<template>
  <div class="main-activation">
    <div class="page-title">
      <h3>Активации</h3>
    </div>

    <!-- <p class="center">
      Записей пока нет.
      <router-link to="/record">Добавить новую запись</router-link>
    </p> -->

    <section>
      <ActivationTable></ActivationTable>
    </section>
  </div>
</template>

<script>
import ActivationTable from '../components/ActivationTable.vue';
export default {
  name: 'activation',
  components: { ActivationTable },
};
</script>
