<template>
  <section>
    <div class="card text-black shadow">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
        class="card-img-top"
        alt="Apple Computer"
      />
      <div class="card-body">
        <div class="text-center">
          <h5 class="card-title">Believing is seeing</h5>
          <p class="text-muted mb-4">Apple pro display XDR</p>
        </div>
        <button
          class="btn btn-success btn-lg"
          style="padding-left: 2.5rem; padding-right: 2.5rem"
        >
          ADD TO CART
        </button>
        <button
          class="btn btn-primary btn-lg mt-3"
          style="padding-left: 2.5rem; padding-right: 2.5rem"
        >
          BUY NOW
        </button>
        <div class="d-flex justify-content-between total font-weight-bold mt-4">
          <span>Price</span><span class="fw-bold">$7,197.00</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductCard",
};
</script>
