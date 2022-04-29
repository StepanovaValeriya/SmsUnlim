<template>
  <div class="main-history">
    <div class="page-title">
      <h3>История операций</h3>
    </div>

    <!-- <p class="center">
      Записей пока нет.
      <router-link to="/record">Добавить новую запись</router-link>
    </p> -->

    <section>
      <HistoryTable></HistoryTable>
    </section>
  </div>
</template>

<script>
import HistoryTable from '../components/HistoryTable.vue';
export default {
  name: 'history',
  components: { HistoryTable },
};
</script>
