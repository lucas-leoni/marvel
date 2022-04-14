<template>
  <div>
    <nav class="navbar navbar-light bg-primary mb-5">
      <div class="container-fluid">
        <div class="col">
          <a class="navbar-brand text-light" href="/">
            <router-link class="navbar-brand text-light" to="/">
              Marvel App
            </router-link>
          </a>
        </div>
        <div class="col d-flex justify-content-end">
          <a class="navbar-brand text-light" href="/">
            <router-link class="navbar-brand text-light" to="/women">
              Personagens Femininas
            </router-link>
          </a>
          <a class="navbar-brand text-light" href="/">
            <router-link class="navbar-brand text-light" to="/man">
              Personagens Masculinos
            </router-link>
          </a>
          <a class="navbar-brand text-light" href="/">
            <router-link class="navbar-brand text-light" to="/novo-personagem">
              Adicionar Personagem
            </router-link>
          </a>
        </div>
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
