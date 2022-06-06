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
            <router-link to="/login" class="nav-link navbar-link"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link navbar-link"
              >Rigister</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavComp",
};
</script>

<style scoped>
.navbar-link {
  font-weight: bold;
  color: black;
}
</style>
