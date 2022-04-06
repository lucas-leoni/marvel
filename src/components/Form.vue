<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-11">
        <h1 class="pt-4 text-center mb-5 text-primary">
          Adicione um novo herói ou vilão
        </h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="row mb-3">
          <label for="name"
            >Nome
            <input
              type="text"
              class="form-control mt-2"
              v-model="name"
              placeholder="Informe o nome do personagem"
            />
          </label>
        </div>
      </div>
      <div class="col-4">
        <div class="row mb-3">
          <label for="image"
            >Insira uma imagem do personagem
            <input
              type="file"
              accept="image/png, image/jpeg"
              class="form-control mt-2"
            />
          </label>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="row mb-3">
          <label for="description"
            >Descreva o personagem
            <textarea
              class="form-control mt-2"
              rows="3"
              v-model="description"
            ></textarea>
          </label>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <p>Nome do personagem: {{ name }}</p>
        <p>Descrição do personagem: {{ description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      name: "",
      description: "",
    };
  },
};
</script>
