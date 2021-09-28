<template>
  <div id="app">
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
      users: []
    }
  },
  methods: {
    updateTable($event) {
      this.users.push($event);
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
