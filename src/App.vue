<template>
  <NavComp />
  <router-view />
  <FooterComp />
</template>

<script>
import NavComp from "./components/NavComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  components: {
    NavComp,
    FooterComp,
  },
};
</script>

<style></style>
