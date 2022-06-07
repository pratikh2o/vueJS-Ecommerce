<template>
  <div>
    <NavComp />
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form @submit.prevent="onSubmit">
              <div class="divider d-flex align-items-center my-4">
                <h1 class="text-center fw-bold mx-3 mb-0">REGISTER</h1>
              </div>

              <p v-if="error" class="text-danger">{{ error }}</p>
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter your name"
                  v-model="state.name"
                />
                <label class="form-label" for="form3Example3">Name</label>
              </div>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  v-model="state.email"
                />
                <label class="form-label" for="form3Example3"
                  >Email address</label
                >
              </div>
              <div class="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                  v-model="state.password"
                />
                <label class="form-label" for="form3Example4">Password</label>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <input
                  type="submit"
                  class="btn btn-primary btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem"
                  value="REGISTER"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <FooterComp />
  </div>
</template>

<script>
import NavComp from "../components/NavComp.vue";
import FooterComp from "../components/FooterComp.vue";
import { registerUser } from "../api/auth";
export default {
  components: {
    NavComp,
    FooterComp,
  },
  data: function () {
    return {
      state: {
        name: "",
        email: "",
        password: "",
      },
      loading: false,
      error: "",
    };
  },
  methods: {
    onSubmit: async function () {
      try {
        console.log("submit");
        this.loading = true;
        let res = await registerUser(this.state);

        if (res.data.success) {
          this.loading = false;
          this.$router.push("/login");
        } else {
          this.loading = false;
        }
      } catch (error) {
        this.error = "error in register";
        console.log(this.error);
      }
    },
  },
};
</script>

<style>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>
