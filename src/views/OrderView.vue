<template>
  <div>
    <h1 class="m-4 text-center">Checkout</h1>
    <div class="col-md-4 container bg-default">
      <router-link to="/cart" class="btn btn-sm btn-primary text-center"
        ><i class="fa fa-arrow-alt-circle-left"></i> back</router-link
      >
      <h4 class="my-4">Billing Address</h4>

      <form @submit="onSubmit">
        <div class="form-group">
          <label for="adress">Address</label>
          <input
            v-model="userAddress.address"
            type="text"
            class="form-control"
            id="adress"
            placeholder="1234 Main Street"
            required
          />
        </div>
        <div class="form-group">
          <label for="adress">State</label>
          <input
            v-model="userAddress.state"
            type="text"
            class="form-control"
            id="adress"
            placeholder="Delhi"
            required
          />
        </div>

        <div class="form-group">
          <label for="adress">City</label>
          <input
            v-model="userAddress.city"
            type="text"
            class="form-control"
            id="adress"
            placeholder="nashik"
            required
          />
        </div>
        <div class="form-group">
          <label for="adress">Pincode</label>
          <input
            type="number"
            v-model="userAddress.pincode"
            class="form-control"
            id="adress"
            required
          />
        </div>

        <button class="btn btn-primary bt-lg btn-block mt-3" type="submit">
          {{ loading ? "Loading ..." : "Continue to Checkout" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { emptyCart, loadCart } from "../api/product";
import { isUser } from "../api/auth";
import { addOrder } from "../api/order";
export default {
  name: "OrderView",
  data: function () {
    return {
      products: [],
      user: false,
      userAddress: {
        address: "",
        state: "",
        city: "",
        pincode: 0,
        products: [],
        user: false,
        totalPrice: 0,
      },
      loading: false,
      error: "",
    };
  },
  created: function () {
    let { user } = isUser();
    this.userAddress.products = this.products.map((p) => {
      return { product: p._id };
    });
    this.userAddress.user = user._id;
    let total = 0;
    loadCart().map((val) => {
      total = total + val.price;
    });
    this.userAddress.totalPrice = total;
  },

  methods: {
    onSubmit: async function () {
      try {
        this.loading = true;
        console.log(this.userAddress);
        let res = await addOrder(this.userAddress);
        if (res) {
          this.$router.push("/");
          emptyCart();
          alert("Your order will delivered to your Address COD :)");
        }
      } catch (error) {
        this.error = error;
        this.loading = false;
        console.log(error);
      }
    },
  },
};
</script>
