import { MutationTree } from 'vuex'; // necessario para a definiçao de mutations

export interface State {
	time: number,
	isActive: boolean,
	hasCompleted: boolean
}

// funções dos getters do vuex
export interface Getters {
	minutes: (store: State) => number
	seconds: (store: State) => number
}

// Mutações: responsáveis por muda o estado
export enum Mutations {
	SET_TIME = 'SET_TIME',
	RESET_TIME = 'RESET_TIME',
	SET_IS_ACTIVE = 'SET_IS_ACTIVE',
	SET_HAS_COMPLETED = 'SET_HAS_COMPLETED',
}

// funçâo que retorna meio estado. TEM QUE SER ASSIM MESMO
export type RootState = ReturnType<() => State>

// Definiçâo da Assinatura das minhas mutações
// OBS: essa é uma forma de criar funçôes de forma dinamica
// `[Mutations.SET_TIME]` = é igual a = SET_TIME() : void
// todas retornan void, já que mudam o estado, entã não há nenhum retorno
export interface MutationsInterface extends MutationTree<RootState> {
	[Mutations.SET_TIME](s: State, p: number): void;
	[Mutations.RESET_TIME](s: State): void;
	[Mutations.SET_IS_ACTIVE](s: State, p: boolean): void;
	[Mutations.SET_HAS_COMPLETED](s: State, p: boolean): void;
}
