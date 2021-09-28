<template>
    <el-table
        :data = 'tableData'
        border>
        <el-table-column prop="name" label="Имя" sortable></el-table-column>
        <el-table-column prop="number" label="Телефон" sortable></el-table-column>
    </el-table>
</template>

<script>
export default {
  name: 'Table',
  props: ['users'],
  data() {
      return {
          tableData: this.users
      }
  }
}
</script>