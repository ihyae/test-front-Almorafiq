<template>
  <div id="app">
    <DashboardAdmin/>
  </div>
</template>

<script>
import DashboardAdmin from './components/DashboardAdmin.vue'

export default {
  name: 'App',
  components: {
    DashboardAdmin
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
