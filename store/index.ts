import { Mutations } from './Challenges/types';

export const actions = {

	// Vai ser rodado quando o server do nuxt rodar
	// O commit é a forma original apara acessar as muatations
	// O mapStete/Gettters que usamos evita agente escrever dessa forma
	//			this.$store.commit(`Challenges/${Mutations.SAVE_COOKIE_DATA}`, cookie)
	// Aqui não tem como fazermos mapState pois não estamos no vue
	nuxtServerInit ({ commit }: any, { app }: any) {
		// esse app é como o htis que utilizamos no nuxt
		const cookie = app.$cookiz.get('movueit');

		if (cookie) {
			commit(`Challenges/${Mutations.SAVE_COOKIE_DATA}`, cookie);
		}
	},

};
