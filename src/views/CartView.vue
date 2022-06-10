<template>
  <div>
    <NavComp />
    <h1 class="text-center m-4">Your Cart</h1>
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
        <EmptyCart v-if="products.length <= 0" />
      </div>
    </div>

    <ProductCost :products="products" :totalPrice="totalPrice" />
    <!-- <router-link to="/order" class="btn btn-primary">Checkout</router-link> -->
    <div class="col-sm-12 empty-cart-cls text-center">
      <router-link
        to="/order"
        class="btn btn-primary cart-btn-transform m-3"
        data-abc="true"
        v-if="user"
        >Checkout</router-link
      >
      <p class="small fw-bold mt-2 pt-1 mb-0" v-if="!user">
        Login here to checkout
        <router-link to="/login" class="link-danger">LOGIN</router-link>
      </p>
    </div>
    <FooterComp />
  </div>
</template>
<script>
import NavComp from "../components/NavComp.vue";
import FooterComp from "../components/FooterComp.vue";
import ProductCard from "../components/ProductCard.vue";
import ProductCost from "../components/ProductCost.vue";
import EmptyCart from "../components/EmptyCart.vue";
import { loadCart, removeFromCart } from "../api/product";
import { isUser } from "../api/auth";
export default {
  name: "CartView",
  components: {
    NavComp,
    FooterComp,
    ProductCost,
    ProductCard,
    EmptyCart,
  },

  data: function () {
    return {
      products: [],
      added: false,
      remove: true,
      totalPrice: 0,
      user: false,
    };
  },
  methods: {
    onRemove(id) {
      console.log(id);
      removeFromCart(id, () => {
        this.products = loadCart();
        let total = 0;
        this.products.map((val) => {
          total = total + val.price;
        });
        this.totalPrice = total;
      });
    },
  },

  created: function () {
    this.user = isUser();
    this.products = loadCart();
    let total = 0;
    this.products.map((val) => {
      total = total + val.price;
    });
    this.totalPrice = total;
  },
};
</script>
