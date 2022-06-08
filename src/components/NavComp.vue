<template>
  <div class="navbar navbar-expand-lg bg-light shadow">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link navbar-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link navbar-link"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link navbar-link"
              >Cart</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link navbar-link" v-if="!user"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/register"
              class="nav-link navbar-link"
              v-if="!user"
              >Rigister</router-link
            >
          </li>
          <li class="nav-item">
            <span
              class="nav-link navbar-link text-danger"
              role="button"
              v-if="user"
              @click="signOut"
            >
              Signout
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { isUser, signout } from "../api/auth";
export default {
  name: "NavComp",
  data: function () {
    return {
      user: false,
    };
  },
  methods: {
    signOut: function () {
      signout(() => {
        this.$router.go();
      });
    },
  },

  created: function () {
    this.user = isUser();
  },
};
</script>

<style scoped>
.navbar-link {
  font-weight: bold;
  color: black;
}
</style>
