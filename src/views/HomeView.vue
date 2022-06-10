<template>
  <div>
    <NavComp />
    <div>
      <h1 class="text-center m-3">Vue ECOM</h1>
      <div class="container py-5">
        <div class="row justify-content-center" v-if="products.length > 0">
          <div
            class="col-md-6 col-lg-4 mt-4"
            v-for="product of products"
            :key="product._id"
          >
            <ProductCard :product="product" :added="added" :remove="remove" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="loading">
      <div class="container mb-5">
        <div class="row">
          <div class="col">
            <SpinnerComp />
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
import SpinnerComp from "../components/SpinnerComp.vue";
import { getAllProduct } from "../api/product";
export default {
  name: "HomeView",
  components: {
    NavComp,
    FooterComp,
    ProductCard,
    SpinnerComp,
  },
  data: function () {
    return {
      products: [],
      loading: false,
      error: "",
      added: true,
      remove: false,
    };
  },

  created: async function () {
    try {
      this.loading = true;
      let res = await getAllProduct();
      this.products = res.data.products;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error = error;
    }
  },
};
</script>
