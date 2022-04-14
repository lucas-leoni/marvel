import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import NovoPersonagem from "@/views/NovoPersonagem.vue";
import PersonagemProfile from "@/views/personagem/Profile.vue";
import PersonagemFeminino from "@/views/personagem/Women.vue";
import PersonagemMasculino from "@/views/personagem/Man.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/novo-personagem",
    name: "NovoPersonagem",
    component: NovoPersonagem,
  },
  {
    path: "/personagem/:id",
    name: "PersonagemProfile",
    component: PersonagemProfile,
  },
  {
    path: "/women",
    name: "PersonagemFeminino",
    component: PersonagemFeminino,
  },
  {
    path: "/man",
    name: "PersonagemMasculino",
    component: PersonagemMasculino,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
