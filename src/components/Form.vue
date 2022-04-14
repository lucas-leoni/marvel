<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-11">
        <h1 class="pt-4 text-center mb-5 text-primary">
          Adicione um novo personagem
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
          <label for="franquia"
            >Franquia
            <input
              type="text"
              class="form-control mt-2"
              v-model="franquia"
              placeholder="Informe a franquia do personagem"
            />
          </label>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
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
      <div class="col-4 d-flex align-items-center">
        <div class="col-2">
          <span>Sexo:</span>
        </div>
        <div class="col">
          <div class="form-check form-check-inline mb-0">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="Masculino"
              v-model="sexo"
            />
            <label class="form-check-label" for="inlineRadio1">Masculino</label>
          </div>
        </div>
        <div class="col">
          <div class="form-check form-check-inline mb-0">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="Feminino"
              v-model="sexo"
            />
            <label class="form-check-label" for="inlineRadio2">Feminino</label>
          </div>
        </div>
        <div class="col"></div>
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
      <div class="col-8 d-flex justify-content-between">
        <button type="button" class="btn btn-secondary">
          <router-link class="text-light text-decoration-none" to="/"
            >Cancelar
          </router-link>
        </button>
        <button @click="salvar" type="button" class="btn btn-primary">
          Salvar
        </button>
      </div>
    </div>
    <div class="row justify-content-center mt-4">
      <div class="col-8">
        <p>Nome do personagem: {{ name }}</p>
        <p>Franquia do personagem: {{ franquia }}</p>
        <p>Sexo do personagem: {{ sexo }}</p>
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
      franquia: "",
      sexo: "",
      description: "",
    };
  },
  methods: {
    salvar() {
      let dados = new Array();
      if (localStorage.hasOwnProperty("dados")) {
        dados = JSON.parse(localStorage.getItem("dados"));
      }
      const dadosSalvar = {
        id: Math.floor(Math.random() * 1000 + 6),
        name: this.name,
        franquia: this.franquia,
        sexo: this.sexo,
        description: this.description,
      };
      dados.push(dadosSalvar);
      localStorage.setItem("dados", JSON.stringify(dados));
      this.$router.push("/");
    },
  },
};
</script>
