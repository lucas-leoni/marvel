<template>
  <div id="app">
    <Navbar />
    <router-view />
    <!-- <Navbar />
    <div class="container">
      <div class="row">
        <div
          class="col d-flex justify-content-center"
          v-for="marvel in personagensMarvel"
          :key="marvel.id"
        >
          <card-marvel :marvel="marvel" />
        </div>
      </div>
      <div class="row">
        <div
          class="col d-flex justify-content-center"
          v-for="dc in personagensDc"
          :key="dc.id"
        >
          <card-dc :dc="dc" />
        </div>
      </div>
    </div>
    <div class="container">
      <Form />
    </div> -->
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import CardMarvel from "@/components/CardMarvel.vue";
import CardDc from "@/components/CardDc.vue";
import Form from "@/components/Form.vue";

export default {
  name: "App",
  components: {
    Navbar,
    CardMarvel,
    CardDc,
    Form,
  },
  data() {
    return {
      personagensMarvel: [
        {
          id: 1,
          name: "Hulk,",
          about: "Esmaga e cresce.... Birlll!",
          category: "Marvel",
          photo:
            "https://upload.wikimedia.org/wikipedia/pt/9/91/Bruce_Banner.jpg",
        },
        {
          id: 2,
          name: "Homem de Ferro,",
          about: "Jarvis, faça algo",
          category: "Marvel",
          photo:
            "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/62/89/45/18793030.jpg",
        },
        {
          id: 3,
          name: "Thor,",
          about: "Me dê o meu martelo...",
          category: "Marvel",
          photo:
            "https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_2048,w_2048/v1557872523/user-922181/profile/h59oetwiowyscssxiuw8.jpg",
        },
      ],
      personagensDc: [
        {
          id: 1,
          name: "Batman,",
          about: "Todos nós usamos máscaras.",
          category: "DC",
          photo:
            "https://c.wallhere.com/photos/09/65/Batman_black_vertical_drawing-1959399.jpg!d",
        },
        {
          id: 2,
          name: "Arlequina,",
          about: "Amo seu perfume. Qual é o nome? O aroma da morte?",
          category: "DC",
          photo:
            "https://http2.mlstatic.com/D_NQ_NP_777071-MLB41848989001_052020-O.webp",
        },
        {
          id: 3,
          name: "Coringa,",
          about: "Por que tão sério?",
          category: "DC",
          photo: "https://cdn.europosters.eu/image/750webp/30397.webp",
        },
      ],
    };
  },
};
</script>
<style scoped>
/* .cards{
  display: flex;
  flex-direction: row;
} */
</style>
