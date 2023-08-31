<script lang="ts">
	import type { Coffee } from '$types/coffee';
	import CoffeeCard from '../coffee-card/CoffeeCard.svelte';

	export let coffeeList: Coffee[];
</script>

<div class="coffee-list">
	{#each coffeeList as coffee}
		<div class="coffee-list__container">
			<CoffeeCard {coffee} />
		</div>
	{/each}
</div>

<style lang="scss">
	.coffee-list {
		display: flex;
		flex-direction: column;

		&__container {
			& + & {
				margin-top: 30px;
			}
		}
	}
</style>
