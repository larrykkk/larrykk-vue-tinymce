import tinyMCE from "./tinyMCE.vue";
tinyMCE.install = function(Vue) {
  Vue.component("tinymce", tinyMCE);
};
export default tinyMCE;
