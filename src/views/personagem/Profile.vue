<template>
  <card />
  <!-- <div v-if="exibir">
    <div v-if="true">
      <h1>Profile</h1>
      <pre>{{ profile }}</pre>
    </div>

    <div v-show="true">Não tenho dado para ser exibido!</div>

    <div v-if="isStatus">
      {{ showFullName }} <br />
      {{ setName }} <br />
      {{ setFruit }}

      <ul v-for="fruit in setFruit" :key="fruit.id">
        <li>{{ fruit }}</li>
      </ul>
    </div>
  </div> -->
</template>
<script>
import Card from "@/components/Card.vue";

export default {
  name: "Perfil",
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
  /* data() {
    return {
      name: "Lucas",
      lastName: "Leoni",
      isStatus: true,
      profile: {
        name: "Homem Aranha",
        bio: "Eu sou o Espetacular Homem Aranha!",
        photo: "",
        power: "Teias",
        enemies: "Duende Verde",
        fraquezas: "Mary Jane",
        status: false,
      },
    };
  }, */

  // FILTERS
  // WATCHERS

  computed: {
    showFullName() {
      return this.name + " " + this.lastName;
    },
    setName() {
      this.name = "Zé Lelé";
      return this.name;
    },
    setFruit() {
      const fruits = ["abacate", "limao"];
      return fruits;
    },
    exibir() {
      return this.$route.name === "PersonagemProfile";
    },
  },
};
</script>
