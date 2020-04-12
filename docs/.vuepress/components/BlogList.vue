<template>
  <div class="container">
    <ul>
      <li v-for="value in posts()">{{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    posts() {
      return this.$site.pages.filter(page => page.path.startsWith("/blog/"));
    }
  }
};
</script>
</script>

<style>
</style>