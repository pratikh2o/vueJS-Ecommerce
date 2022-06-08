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
            <ProductCard :product="product" />
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
import { getAllProduct } from "../api/product";
export default {
  name: "HomeView",
  components: {
    NavComp,
    FooterComp,
    ProductCard,
  },
  data: function () {
    return {
      products: [],
      loading: false,
      error: "",
    };
  },

  created: async function () {
    try {
      this.loading = true;
      let res = await getAllProduct();
      console.log(res);
      this.products = res.data.products;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error = error;
    }
  },
};
</script>
