<template>
	<header class="pb-1 flex items-center">
		<p class="text-sm">
			{{ `${xp.start} xp` }}
		</p>
		<div class="mx-4 lg:mx-6 flex-1 bg-gray-line h-1 rounded-md">
			<div class="relative bg-green h-1" :style="{ width: `${currentXpPercentage}%` }">
				<p class="text-sm absolute -right-4 w-max top-2">
					{{ `${xp.current} xp (${currentXpPercentage}%)` }}
				</p>
			</div>
		</div>
		<p class="text-sm">
			{{ `${xp.end} xp` }}
		</p>
	</header>
</template>

<script lang='ts'>

import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';

export default Vue.extend({

	// Perceba que agente nâo quer todo o estado
	// Com mapState e mapGetters assim, nâo precisamos acessar um nome muito grande
	computed: {
		...mapState('Challenges', ['xp']), // Eu mapeio meu estado para a variavel 'xp
		...mapGetters('Challenges', ['currentXpPercentage']), // Eu mapeio meio Getera para soemnte 'currentXpPercentage'
	},

});
</script>
