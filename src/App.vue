<template>
  <div id="app">
    <router-view/>
    <div class="container">
      <div class="footer">
        <div class="copyright">&copy; 2017. Design and code by Syafrizal Akhzan</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
@import "./main.scss";
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.nav {
  a {
    margin-left: 15px;
    text-decoration: none;
    cursor: pointer;
    color: $primary-color;
    transition: all 0.5s ease-out;

    &:hover {
      background-color: $primary-color;
      color: white;
      padding: 5px;
    }
  }
}
.block {
  margin-bottom: 2rem;
}
.footer {
  display: flex;
  justify-content: center;
  margin-top: 70px;
  border-top: 1px solid $primary-color;
}
.copyright {
  padding: 20px 0;
  font-size: 0.75em;
}
.x-button {
  font-size: 1.32rem;
  text-decoration: none;
  color: $primary-color;
}
</style>
