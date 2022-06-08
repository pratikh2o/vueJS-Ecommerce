<template>
  <div>
    <NavComp />
    <h1>Cart</h1>
    <FooterComp />
  </div>
</template>
<script>
import NavComp from "../components/NavComp.vue";
import FooterComp from "../components/FooterComp.vue";
export default {
  name: "CartView",
  components: {
    NavComp,
    FooterComp,
  },
};
</script>
