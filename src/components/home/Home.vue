<template>
  <div class="container">
      <div class="header">
        <div class="logo">Syafrizal Akhzan</div>
        <div class="nav">
            <a>Contact</a>
            <a>About</a>
        </div>
      </div>
      <div class="mid-content">
          <div>frontend web developer, based in Jakarta</div>
      </div>
      <div class="portofolios">
          <div class="split-portofolios">
              <div class="portofolios-item"><div></div></div>
              <div class="portofolios-item"><div></div></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style lang="scss">
@import './../../main.scss';
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

        &:hover {
            background-color: $primary-color;
            color: white;
            padding: 5px;
        }
    }
}
.logo {
    font-weight: 600;
    font-size: 1.5rem;
}
.mid-content {
    height: 60vh;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 4.5rem;
}
.portofolios {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.split-portofolios {
    display: flex;
    justify-content: center;
    margin-left: -10px;
    margin-right: -10px;
}
.portofolios-item {
    width: calc(100% - 20px);
    padding: 10px;
    height: 50vh;

    div {
        background-color: $primary-color;
        width: 100%;
        height: 100%;
    }
}
</style>
