<template>
  <div class="container">
    <div class="row">
      <div class="columns pageHeader">
        <h2>{{name}}</h2>
        <h2> {{position}} </h2>
        <h4>Currently working at {{location}}</h4>
        <a class="button" :href="github">Github</a>
        <a class="button" :href="linkedln">Linkedln</a>
        <a class="button" :href="twitter">Twitter</a>
        <a class="button" :href="instagram">Instagram</a>
        <a class="button" :href="email">Email</a>
        <a class="button" :href="resume">Resume</a>
        <a class="button" :href="projects">Projects</a>

      </div>
    </div>
    <!-- <project-view/> -->
  </div>
</template>

<script>
import Projects from "./Projects.vue";
export default {
  name: "Header",
  components: {
    "project-view": Projects
  },
  data: function() {
    return {
      name: "Victor Popoola",
      position: "Software Developer",
      location: "Dalhousie University",
      github: "https://github.com/VictorXLR",
      linkedln: "https://www.linkedin.com/in/victor-popoola/",
      twitter: "http://twitter.victorxlr.me",
      instagram: "http://instagram.victorxlr.me",
      email: "loopy@victorxlr.me",
      projects: "./projects",
      resume: "./resume"
    };
  }
};
</script>
<style>
.pageHeader {
  margin-top: 20%;
  margin-bottom: 40%;
}
</style>


