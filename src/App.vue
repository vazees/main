<template>
  <div class="app">
    <Table :users='this.users'/>
    <Modal :users='this.users' @save-user='updateTable($event)'/>
  </div>
</template>

<script>
import Table from './components/Table';
import Modal from './components/Modal';

export default {
  name: 'App',
  components: {
    Table,
    Modal
  },
  data() {
    return {
      users: JSON.parse(localStorage.getItem('users')) || []
    }
  },
  methods: {
    updateTable($event) {
      this.users.push($event);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
}
</script>

<style>
.app {
  margin-top: 60px;
}
</style>
