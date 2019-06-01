<template>
  <div id="app">
    <div id="nav">
    <router-view/>

      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/">MultiView</router-link>
    </div>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: initial;
}
img {
  position: relative;
  margin-right: 50%;
  margin-left: 50%;
}
</style>
