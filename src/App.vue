<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col"
        v-for="personagem in personagens"
        :key="personagem.id">
          <Card
            :personagem="personagem"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Card,
  },
  data() {
    return {
      personagens: [
        {
          id: 1,
          name: 'Hulk,',
          about: 'Esmaga e cresce.... Birlll!',
          photo: 'https://upload.wikimedia.org/wikipedia/pt/9/91/Bruce_Banner.jpg',
        },
        {
          id: 2,
          name: 'Homem de Ferro,',
          about: 'Jarvis, faça algo',
          photo: 'https://www.imagensempng.com.br/wp-content/uploads/2021/08/03.png'
        },
        {
          id: 3,
          name: 'Thor,',
          about: 'Me dê o meu martelo...',
          photo: 'https://i.pinimg.com/originals/5b/eb/f1/5bebf147723add0dec80991da354c031.png',
        },
      ]
    }
  }
};
</script>
<style scoped>
/* .cards{
  display: flex;
  flex-direction: row;
} */
</style>