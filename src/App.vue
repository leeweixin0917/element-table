<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 普通表格 -->
    普通表格
    <!-- <AddTable /> -->
    <!-- 树形数据表格 -->
    树形数据表格
    <!-- <TreeTable /> -->
    <!-- 可点击数据表格中的数据 -->
    可点击数据表格
    <ClickTable />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AddTable from '@/components/AddTable.vue'
import TreeTable from '@/components/TreeTable.vue'
import ClickTable from '@/components/ClickTable.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    AddTable,
    TreeTable,
    ClickTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
