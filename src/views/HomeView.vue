<template>
  <div>
    <NavComp />
    <div>
      <h1>Home</h1>
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
    <FooterComp />
  </div>
</template>

<script>
import NavComp from "../components/NavComp.vue";
import FooterComp from "../components/FooterComp.vue";
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "HomeView",
  components: {
    NavComp,
    FooterComp,
    ProductCard,
  },
};
</script>
