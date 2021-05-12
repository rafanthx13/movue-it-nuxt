// importo as minhas definições de tipagem para ser relamente implementadas aqui
import { State, Getters, Mutations, MutationsInterface } from './types';
// essas 3 tipagsens serâo usadaas aqui para criar os modulos de estado do CountDown
// Aqui construireesmos o corpo das coisas do vuex de acordo com a tipagem que definimos

const MINUTES = 0.05; // 0.05 representa 3 segundos; 0.5 = 30s

export const state = (): State => ({
	time: MINUTES * 60,
	isActive: false,
	hasCompleted: false,
});

export const getters: Getters = {
	minutes: state => Math.floor(state.time / 60),
	seconds: state => state.time % 60,
};

export const mutations: MutationsInterface = {
	[Mutations.SET_TIME] (state, newTime) {
		state.time = newTime;
	},
	[Mutations.RESET_TIME] (state) {
		state.time = MINUTES * 60;
	},
	[Mutations.SET_IS_ACTIVE] (state, isActive) {
		state.isActive = isActive;
	},
	[Mutations.SET_HAS_COMPLETED] (state, hasCompleted) {
		state.hasCompleted = hasCompleted;
	},
};
