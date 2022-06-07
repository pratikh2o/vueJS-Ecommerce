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
                <h1 class="text-center fw-bold mx-3 mb-0">LOGIN</h1>
              </div>
              <p class="text-danger" v-if="error">{{ error }}</p>
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
                  value="LOGIN"
                />

                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <router-link to="/register" class="link-danger"
                    >Register</router-link
                  >
                </p>
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
import { loginUser, authUser } from "../api/auth";
export default {
  name: "LoginView",
  components: {
    NavComp,
    FooterComp,
  },
  data: function () {
    return {
      state: {
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
        this.loading = true;
        console.log(this.state);
        let res = await loginUser(this.state);
        this.loading = false;
        if (res.data.success) {
          let { token, user } = res.data;
          authUser({ token, user }, () => {
            this.$router.push("/");
          });
        } else {
          this.error = "error in login";
        }
      } catch (error) {
        this.loading = false;
        this.error = error.message;
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
