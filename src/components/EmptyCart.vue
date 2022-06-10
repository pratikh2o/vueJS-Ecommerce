<template>
  <div class="container-fluid mt-100">
    <div class="row">
      <div class="col-md-12"></div>
      <div class="card-body cart">
        <div class="col-sm-12 empty-cart-cls text-center">
          <img
            src="https://i.imgur.com/dCdflKN.png"
            width="130"
            height="130"
            class="img-fluid mb-4 mr-3"
          />
          <h3><strong>Your Cart is Empty</strong></h3>
          <h4>Add something to make me happy :)</h4>
          <router-link
            to="/"
            class="btn btn-primary cart-btn-transform m-3"
            data-abc="true"
            >continue shopping</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyCart",
};
</script>

<style></style>
