<template>
  <div class="container">
    <router-link to="/about" class="linkelement">About Me</router-link>
    <router-link to="/now" class="linkelement">Now</router-link>
    <router-link to="/resume" class="linkelement">Resume</router-link>
    <router-link to="/about#Projects" class="linkelement">Projects</router-link>
    <router-link to="/cheatbook" class="linkelement">Cheat Sheet</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.container {
  padding-top: 2em;
  padding-bottom: 2em;
}

.linkelement {
  display: block;
  font-size: 10vw;
  text-decoration: none;
  color: #000000;
 padding: 2% 0  2% 0 ;
}

.linkelement:hover {
  color: #fff;
  background-color: #40a4b8;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
