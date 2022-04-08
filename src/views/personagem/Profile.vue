<template>
  <div>
		<div v-if="true">
			<h1>Profile</h1>
  		<pre>{{ profile }}</pre>
		</div>

		<div v-show="false">
			Não tenho dado para ser exibido!
		</div>

		<div v-if="isStatus">
			{{ showFullName }} <br>
			{{ setName }} <br>
			{{ setFruit }}

			<ul v-for="fruit in setFruit" :key="fruit.id">
				<li>{{ fruit }}</li>
			</ul>
		</div>
	</div>

</template>
<script>

export default {
  name: "Perfil",
  data() {
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
    }
  },

	// FILTERS
	// WATCHERS
	computed: {
		showFullName() {
			return this.name + ' ' + this.lastName;
		},
		setName() {
			this.name = 'Zé Lelé';
			return this.name;
		},
		setFruit() {
			const fruits = [ 'abacate', 'limao'];
			return fruits;
		}
	},
};
</script>