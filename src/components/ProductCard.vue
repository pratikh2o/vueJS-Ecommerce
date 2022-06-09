<template>
  <section>
    <div class="card text-black shadow">
      <img
        :src="`${url}/product/photo/${product._id}`"
        class="card-img-top"
        alt="Apple Computer"
      />
      <div class="card-body">
        <div class="text-center">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="text-muted mb-4">{{ product.description }}</p>
        </div>
        <button
          class="btn btn-success btn-lg"
          style="padding-left: 2.5rem; padding-right: 2.5rem"
          @click="addCart"
          :disabled="addedToCart"
          v-if="added"
        >
          {{ addedToCart ? "ADDED" : "ADD" }} TO CART
        </button>
        <button
          class="btn btn-primary btn-lg mt-3"
          style="padding-left: 2.5rem; padding-right: 2.5rem"
          :disabled="addedToCart"
          v-if="added"
          @click="buyProduct"
        >
          BUY NOW
        </button>
        <button
          class="btn btn-danger"
          v-if="remove"
          @click="$emit('remove-task', product._id)"
        >
          REMOVE
        </button>
        <div class="d-flex justify-content-between total font-weight-bold mt-4">
          <span>Price</span><span class="fw-bold">${{ product.price }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { API } from "../backendAPI";
import { addPoductToCart, loadCart } from "../api/product";
export default {
  name: "ProductCard",
  props: ["product", "added", "remove"],
  data() {
    return {
      url: API,
      cart: [],
      addedToCart: false,
      toggle: false,
    };
  },
  methods: {
    addCart() {
      addPoductToCart(this.product, () => {
        this.addedToCart = true;
      });
    },

    buyProduct() {
      addPoductToCart(this.product, () => {
        this.addedToCart = true;
        this.$router.push("/cart");
      });
    },
  },

  created: function () {
    this.cart = loadCart();
    this.cart.forEach((val) => {
      if (val._id === this.product._id) {
        this.addedToCart = true;
      }
    });
  },
  emits: ["remove-task"],
};
</script>
