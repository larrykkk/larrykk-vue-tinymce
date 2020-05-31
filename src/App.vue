<template>
  <div id="app">
    <tinymce v-model="content" />
  </div>
</template>

<script>
import tinymce from "@/components/Index.vue";

export default {
  name: "App",
  components: {
    tinymce,
  },
  data() {
    return {
      content: "this is a demo",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
