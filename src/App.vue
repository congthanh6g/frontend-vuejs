<template>
<div id = "app">
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }">
      <Topnav />
      <router-view />
    </div>
</div>
</template>

<script>
import Sidebar from '../src/components/sidebar/Sidebar.vue'
import Topnav from '../src/components/topnav/Topnav.vue'
import { sidebarWidth } from '@/components/sidebar/state'
export default {
  name: 'App',
  components: {
     Sidebar,
     Topnav
  },
   setup() {
    return { sidebarWidth }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
