<template>
  <div id="app">
    <HomeSection msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HomeSection from "./components/HomeSection.vue";

export default {
  name: "App",
  components: {
    HomeSection
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
}
html {
  font-size: inherit;
}

a {
  text-decoration: none;
  color: #ffffff;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #ffffff;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #e7e4da;
  min-height: 100vh;
}
</style>
