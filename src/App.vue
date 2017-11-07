<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './main.scss';
body {
  margin: 0;
  padding: 0;
}
html {
  margin: 0;
  padding: 0;
  color: #1a1a1a;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 25vh;
  font-size: 1rem;
}
.container {
  padding: 0 5%;
  @include respond-to(large) { 
		padding: 0 20%;
	}
}
</style>
