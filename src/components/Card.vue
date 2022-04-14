<template>
  <div class="card mb-5 mr-1" style="width: 18rem">
    <img :src="personagem.photo" class="card-img-top" />
    <div class="card-body">
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
