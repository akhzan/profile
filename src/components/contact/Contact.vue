<template>
  <div class="container">
    <div class="header">
        <router-link class="x-button" to="/">&#x2716</router-link>
        <div class="nav">
            <router-link to="/about">About</router-link>
        </div>
    </div>
    <div class="contact">
        <p>Want to get in touch? Find me on <a href="mailto: rizal.akhzan@gmail.com">email</a>, <a href="https://instagram.com/akhzan">instagram</a>, <a href="https://github.com/akhzan">github</a> or <a href="https://www.linkedin.com/in/syafrizal-akhzan-a80154a9/">linkedin</a>.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss">
@import "./../../main.scss";
.contact {
    width: 100%;
    margin-top: 15vh;
    font-size: 3.2rem;
    font-weight: 900;
    line-height: 4.1rem;

    a {
        color: darkgrey;
        text-decoration: none;
        transition: all 0.8s ease-out;

        &:hover {
            color: $primary-color;
        }
    }
}
</style>
