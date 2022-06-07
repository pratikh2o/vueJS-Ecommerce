<template>
  <div>
    <NavComp />
    <div>
      <h1>About</h1>
    </div>
    <FooterComp />
  </div>
</template>

<script>
import NavComp from "../components/NavComp.vue";
import FooterComp from "../components/FooterComp.vue";
export default {
  name: "AboutView",
  components: {
    NavComp,
    FooterComp,
  },
};
</script>
