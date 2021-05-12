<template>
	<div class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-rajdhani">
		<CountdownDigits :digits="minutes" />
		<span class="bg-background px-2">:</span>
		<CountdownDigits :digits="seconds" />
	</div>
</template>

<script lang="ts">

import Vue from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex';
import { Mutations } from '~/store/Countdown/types'; // A enumeração da tipagem
import CountdownDigits from '~/components/atoms/CountdownDigits.vue';

let TIMEOUT_REFERENCE: ReturnType<typeof setTimeout>;

export default Vue.extend({

	components: { CountdownDigits },

	computed: {
		// Mapeando estado e getters
		...mapState('Countdown', ['time', 'isActive']),
		...mapGetters('Countdown', ['minutes', 'seconds']),
	},

	methods: {
		// mapeio as mutaçoe e tambem ponho um novo nome, para ficar melhor na semantica
		...mapMutations('Countdown', {
			setTime: Mutations.SET_TIME,
			resetTime: Mutations.RESET_TIME,
		}),

		// começa a rodar o countdonwn
		runCountdown (flag: boolean) {
			if (this.isActive && flag) {
				// Vai decrementar a cada 1 segundo
				TIMEOUT_REFERENCE = setTimeout(() => {
					this.setTime(this.time - 1);
				}, 1000);
			} else {
				// para na hora, assim ,nao espera 1 segundo para parar
				clearTimeout(TIMEOUT_REFERENCE);
			}
		},

	},

	// Vigiar algumas variaveis (por isso tem mesmos nomes de variaveis vue)
	watch: {

		// quando active mudar ...
		isActive (newValue: boolean) {
			this.runCountdown(newValue);
			if (!newValue) {
				this.resetTime();
			}
		},

		// monitorar 'time'
		time (newValue: number) {
			if (newValue > 0) {
				this.runCountdown(true);
			} else {
				// emite um evento, que será pego no inde.vue e assim executa 'getNewChallenge'
				// e lá vai mandar audio e notificação
				this.$emit('completed');
			}
		},

	},
});
</script>
