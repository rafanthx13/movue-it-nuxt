<template>
	<section class="flex flex-col lg:flex-row flex-1 lg:flex-none lg:mt-16 sm:gap-x-10 md:gap-x-20">
		<div class="flex flex-col w-full lg:w-1/2">
			<Profile />
			<CompletedChallenges />
			<Countdown @completed="getNewChallenge" />
			<button
				v-if="hasCountdownCompleted"
				disabled
				class="button completed"
			>
				Cycle completed
			</button>
			<button
				v-else-if="isCountdownActive"
				class="button abandon"
				@click="setCountdownState(false)"
			>
				Abandon cycle
			</button>
			<button
				v-else
				class="button start"
				@click="setCountdownState(true)"
			>
				Start a cycle
			</button>
		</div>
		<Card id="challenge" class="w-full lg:w-1/2" />
	</section>
</template>

<script lang='ts'>
import Vue from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex'; // agora va para uzarmoas as mutations apartir da tiapgemmos usar mapMutations

// Vmaos pegar os tipos das tipagens
import { Mutations as ChallengesMT } from '~/store/Challenges/types';
import { Mutations as CountdownMT } from '~/store/Countdown/types';

import CompletedChallenges from '~/components/atoms/CompletedChallenges.vue';
import Profile from '~/components/molecules/Profile.vue';
import Countdown from '~/components/molecules/Countdown.vue';
import Card from '~/components/organisms/Card.vue';

import {
	playAudio,
	sendNotification,
	getRandomNumber,
	scrollToElement,
} from '~/utils';

interface Head {
	title: string;
}

export default Vue.extend({

	// altera meta-tags
	head (): Head {
		return {
			title: 'Home | movue.it',
		};
	},

	components: {
		CompletedChallenges,
		Countdown,
		Profile,
		Card,
	},

	computed: {
		// Mapear um estado de CountDown para uma variável interna. Para termos uma semântica melhor
		// Para isso mapeamos através de um objeto
		...mapState('Countdown', {
			hasCountdownCompleted: 'hasCompleted',
			isCountdownActive: 'isActive',
		}),
		// mapear estado de Challges e pegar apenas o challengesLength
		...mapGetters('Challenges', ['challengesLength']),
	},

	methods: {
		// Mapeando mutações
		...mapMutations({
			// Perba: Graças a tipagem, eu posso mudar nomes dos métodos apenas mudando a tring da tipagem
			setCountdownHasCompleted: `Countdown/${CountdownMT.SET_HAS_COMPLETED}`,
			setCountdownIsActive: `Countdown/${CountdownMT.SET_IS_ACTIVE}`,
			setCurrentChallengeIndex: `Challenges/${ChallengesMT.SET_CURRENT_CHALLENGE_INDEX}`,
		}),

		setCountdownState (flag: boolean) {
			this.setCountdownHasCompleted(false);
			this.setCountdownIsActive(flag);
		},

		// Pedir permissão par aque meu browser possa emitir notificações
		mounted () {
			if ('Notification' in window) {
				Notification.requestPermission();
			}
		},

		// FunçÂo que fará um callback de CountDown para esse componente
		getNewChallenge () {
			const index = getRandomNumber(0, this.challengesLength);
			this.setCountdownHasCompleted(true);
			this.setCurrentChallengeIndex(index);
			if (Notification?.permission === 'granted') {
				playAudio('/notification.mp3'); // tocar o áudio. ele vai buscar direto na pasta static
				sendNotification('New Challenge!', {
					body: 'A new challenge has started! Go complete it!',
					icon: '/favicon.png',
				});
			}
			// nextTick: Depois que meu challenge aparecer, no mobile, agente vai te rum scroll para subir
			/*
			Defer the callback to be executed after the next DOM update cycle. Use it immediately after you’ve changed some data to wait for the DOM update.
			*/
			this.$nextTick(() => {
				scrollToElement('#challenge');
			});
		},

	},

});
</script>
