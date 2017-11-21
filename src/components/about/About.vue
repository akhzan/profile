<template>
  <div class="container">
    <div class="header">
        <router-link class="x-button" to="/">&#x2716</router-link>
        <div class="nav">
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>
    <div class="about">
        <p><b>Hi, I'm Syafrizal Akhzan</b><br><br>
            An experienced Web Application Developer with a demonstrated history of working in the technology based automotive industry. Strong engineering background with a Bachelor of Science focused in Electronics and Instrumentations from Universitas Gadjah Mada. 
        </p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style lang="scss">
.about {
    margin-top: 15vh;
    height: 20vh;
    font-size: 1rem;
    width: 70%;
    line-height: 1.5rem;
}
</style>
