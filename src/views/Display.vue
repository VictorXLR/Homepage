<template>
  <div class="container ali-right">
    <div class="twelve columns">
      <h1>Hello {{ userName | '_' }}</h1>
      <label class="u-full-width">Username:</label>
      <input type="text" class="u-full-width" v-model="userName" placeholder="Enter a Username">
    </div>
    <button v-on:click="increment">You Clicked Me {{ count }} Times</button>
    <!-- Data -->
    <div>
      <pre><code>{{ $data | json }}</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiView",
  data: function() {
    return {
      userName: "_",
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>

<style>
.ali-right {
  text-align: left;
}
</style>

