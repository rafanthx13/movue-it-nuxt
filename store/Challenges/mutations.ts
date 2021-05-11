import { Mutations, MutationsInterface } from './types';

export default {

	[Mutations.SET_CURRENT_CHALLENGE_INDEX] (state, index) {
		state.currentChallengeIndex = index;
	},

	[Mutations.SET_IS_LEVEL_UP_MODAL_OPEN] (state, flag) {
		state.isLevelUpModalOpen = flag;
	},

	[Mutations.COMPLETE_CHALLENGE] (state, xpAmount) {
		const { current, end } = state.xp;
		const currentTotalXP = current + xpAmount;
		const shouldLevelUp = currentTotalXP >= end;

		state.completedChallenges += 1; // completei um desafio,entao, +1

		if (shouldLevelUp) {
			state.level += 1;

			const remainingXp = currentTotalXP - end;
			const experienceToNextLevel = Math.pow((state.level + 1) * 4, 2);

			state.xp = {
				current: remainingXp,
				start: 0,
				end: experienceToNextLevel,
			};

			state.isLevelUpModalOpen = true;
			return;
		}
		// caso o if ser falso, nao ter evoluido (eu apenas atualizo current)
		state.xp = {
			...state.xp,
			current: currentTotalXP,
		};
	},

	[Mutations.SAVE_COOKIE_DATA] (state, cookie) {
		state.level = cookie.level;
		state.xp = cookie.xp;
		state.completedChallenges = cookie.completedChallenges;
	},

} as MutationsInterface;
