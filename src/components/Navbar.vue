<template>
  <div>
    <nav class="navbar navbar-light bg-primary mb-5">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="/">
          <router-link class="navbar-brand text-light" to="/">
            Marvel App
          </router-link>
        </a>
        <a class="navbar-brand text-light" href="/">
          <router-link class="navbar-brand text-light" to="/novo-personagem">
            Adicionar Personagem
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style scoped></style>
