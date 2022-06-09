<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <strong>Products:</strong>
      </div>
      <div class="card-body">
        <div class="table-responsive-sm">
          <table class="table table-striped">
            <thead>
              <tr>
                <th class="center">#</th>
                <th>Item</th>
                <th>Description</th>
                <th class="right">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product of products" :key="product._id">
                <td class="center">1</td>
                <td class="left strong">{{ product.name }}</td>
                <td class="left">{{ product.description }}</td>

                <td class="right">${{ product.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-5"></div>

          <div class="col-lg-4 col-sm-5 ml-auto">
            <table class="table table-clear">
              <tbody>
                <tr>
                  <td class="left">
                    <strong>Subtotal</strong>
                  </td>
                  <td class="right">$8.497,00</td>
                </tr>
                <tr>
                  <td class="left">
                    <strong>Discount (0%)</strong>
                  </td>
                  <td class="right">$0</td>
                </tr>
                <tr>
                  <td class="left">
                    <strong>GST (0%)</strong>
                  </td>
                  <td class="right">$0</td>
                </tr>
                <tr>
                  <td class="left">
                    <strong>Total</strong>
                  </td>
                  <td class="right">
                    <strong>$7.477,36</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCost",
  props: ["products"],
};
</script>
