<template>
    <div id="app">
        <header-nav/>
        <router-view/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css">
    </div>
</template>

<script>
import HeaderNav from "./components/common/HeaderNav.vue";

export default {
    name: "App",

    components: {
        HeaderNav,
    }
}
</script>

<style>
/* 초기화 작업 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: #787878;
}

.underline {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, cyan 30%);
}
</style>