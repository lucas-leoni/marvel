<template>
  <div class="container">
    <div class="row">
      <div
        class="col-4 d-flex justify-content-center"
        v-for="personagem in personagens"
        :key="personagem.id"
      >
        <card :personagem="personagem" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "HomeView",
  components: {
    Card,
  },
  data() {
    return {
      personagens: [
        {
          id: 1,
          name: "Hulk,",
          description: "Esmaga e cresce.... Birlll!",
          franquia: "Marvel",
          sexo: "masculino",
          photo:
            "https://upload.wikimedia.org/wikipedia/pt/9/91/Bruce_Banner.jpg",
        },
        {
          id: 2,
          name: "Homem de Ferro,",
          description: "Jarvis, faça algo",
          franquia: "Marvel",
          sexo: "masculino",
          photo:
            "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/62/89/45/18793030.jpg",
        },
        {
          id: 3,
          name: "Thor,",
          description: "Me dê o meu martelo...",
          franquia: "Marvel",
          sexo: "masculino",
          photo:
            "https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_2048,w_2048/v1557872523/user-922181/profile/h59oetwiowyscssxiuw8.jpg",
        },
        {
          id: 4,
          name: "Batman,",
          description: "Todos nós usamos máscaras.",
          franquia: "DC",
          sexo: "masculino",
          photo:
            "https://c.wallhere.com/photos/09/65/Batman_black_vertical_drawing-1959399.jpg!d",
        },
        {
          id: 5,
          name: "Arlequina,",
          description: "Amo seu perfume. Qual é o nome? O aroma da morte?",
          franquia: "DC",
          sexo: "feminino",
          photo:
            "https://http2.mlstatic.com/D_NQ_NP_777071-MLB41848989001_052020-O.webp",
        },
        {
          id: 6,
          name: "Coringa,",
          description: "Por que tão sério?",
          franquia: "DC",
          sexo: "masculino",
          photo: "https://cdn.europosters.eu/image/750webp/30397.webp",
        },
      ],
    };
  },
  methods: {
    exibirLocalStorage() {
      let personagensStorage = JSON.parse(localStorage.getItem("dados"));
      this.personagens = this.personagens.concat(personagensStorage);
    },
  },
  beforeMount() {
    if (localStorage.getItem("dados")) {
      this.exibirLocalStorage();
    }
  },
};
</script>
