// Importando os challgens do hard-code
import allChallenges from '~/assets/challenges/data';

import { State } from './types';

// Inicializaçâo do nosso estado
export const state = (): State => ({
	level: 1,
	xp: {
		current: 0,
		start: 0,
		end: 64,
	},
	completedChallenges: 0,
	currentChallengeIndex: null,
	isLevelUpModalOpen: false,
	allChallenges,
});
