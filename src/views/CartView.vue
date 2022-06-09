<template>
  <div>
    <NavComp />
    <h1>Cart</h1>
    <div>
      <div class="container mb-4">
        <div class="row justify-content-center" v-if="products.length > 0">
          <div
            class="col-md-3 col-lg-3 mt-4"
            v-for="product of products"
            :key="product._id"
          >
            <ProductCard
              :product="product"
              :remove="remove"
              :added="added"
              @remove-task="onRemove"
            />
          </div>
        </div>
      </div>
    </div>

    <ProductCost :products="products" />
    <FooterComp />
  </div>
</template>
<script>
import NavComp from "../components/NavComp.vue";
import FooterComp from "../components/FooterComp.vue";
import ProductCard from "../components/ProductCard.vue";
import ProductCost from "../components/ProductCost.vue";
import { loadCart, removeFromCart } from "../api/product";
export default {
  name: "CartView",
  components: {
    NavComp,
    FooterComp,
    ProductCost,
    ProductCard,
  },

  data: function () {
    return {
      products: [],
      added: false,
      remove: true,
    };
  },
  methods: {
    onRemove(id) {
      console.log(id);
      removeFromCart(id, () => {
        this.products = loadCart();
      });
    },
  },

  created: function () {
    this.products = loadCart();
  },
};
</script>
