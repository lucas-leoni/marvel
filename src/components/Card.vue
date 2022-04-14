<template>
  <div class="d-flex">
    <div v-if="exibirPersonagens" class="card mb-5 mr-1" style="width: 18rem">
      <img :src="personagem.photo" class="card-img-top" />
      <div class="card-body d-flex flex-column justify-content-evenly">
        <h5 class="card-title">
          {{ personagem.name }}
        </h5>
        <p class="card-text">
          {{ personagem.description }}
        </p>
        <div class="row justify-content-between">
          <div class="col-5">
            <a class="btn btn-primary">
              <router-link
                class="text-light text-decoration-none"
                v-bind:to="url()"
              >
                Preview
              </router-link>
            </a>
          </div>
          <div class="col-4 d-flex align-items-center justify-content-end">
            <span class="badge bg-warning text-dark">
              {{ personagem.franquia }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="exibirProfile">
      <h1>Profile</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    personagem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    exibirPersonagens() {
      return (
        this.$route.name === "home" ||
        this.$route.name === "PersonagemFeminino" ||
        this.$route.name === "PersonagemMasculino"
      );
    },
    exibirProfile() {
      return this.$route.name === "PersonagemProfile";
    },
  },
  methods: {
    url() {
      return "/personagem/" + this.personagem.id;
    },
  },
};
</script>
<style scoped>
img {
  max-height: 450px;
  min-height: 450px;
}
</style>
