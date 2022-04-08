<template>
  <div class="card" style="width: 18rem">
    <img :src="marvel.photo" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">
        {{ marvel.name }}
      </h5>
      <p class="card-text">
        {{ marvel.about }}
      </p>
      <a href="#" class="btn btn-primary"> Preview </a>
      <span class="badge bg-warning text-dark">Warning</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    marvel: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
img {
  max-height: 450px;
  min-height: 450px;
}
.card {
  margin-bottom: 3rem;
  /* padding: 10px;
  background-color: #eee;
  border: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center; */
}
</style>
