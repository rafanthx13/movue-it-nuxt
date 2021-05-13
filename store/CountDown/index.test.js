import { Mutations } from './types';
import { state as originalState, getters, mutations } from './index';

describe('Store:Countdown:index', () => {
	// Esse estado será usado para ser modificado para cada cenário de testes
	// deixando originalState intocável
	let state;

	beforeEach(() => {
		state = {
			time: 600,
			isActive: false,
			hasCompleted: false,
		};
	});

	// Testar a funçâo de Estado
	// Eu espero que meu estado seja o seguinte hard-code
	describe('State', () => {
		it('should have an initial state', () => {
			expect(originalState()).toMatchObject({
				time: 25 * 60,
				isActive: false,
				hasCompleted: false,
			});
		});
	});

	// Testar getters: verifica se cada um retonr ao que deve see hard-code
	describe('Getters', () => {
		it('minutes', () => {
			const minutes = getters.minutes(state);
			expect(minutes).toBe(10);
		});

		it('seconds', () => {
			const seconds = getters.seconds(state);
			expect(seconds).toBe(0);
		});
	});

	// Testamos se as ações das mutations alteram o estado
	//  para um certo valor hard-code
	describe('Mutations', () => {
		it(Mutations.SET_TIME, () => {
			mutations[Mutations.SET_TIME](state, 10);
			expect(state.time).toBe(10);
		});

		it(Mutations.RESET_TIME, () => {
			mutations[Mutations.RESET_TIME](state);
			expect(state.time).toBe(25 * 60);
		});

		it(Mutations.SET_IS_ACTIVE, () => {
			mutations[Mutations.SET_IS_ACTIVE](state, true);
			expect(state.isActive).toBe(true);
		});

		it(Mutations.SET_HAS_COMPLETED, () => {
			mutations[Mutations.SET_HAS_COMPLETED](state, true);
			expect(state.hasCompleted).toBe(true);
		});
	});
});
