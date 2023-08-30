<script lang="ts">
	import { onMount } from 'svelte';

	import { coffeeStore } from '$store/coffeeStore';
	import CoffeeList from '../coffee-list/CoffeeList.svelte';
	import ButtonRounded from '$components/common/button-rounded/ButtonRounded.svelte';
	import CoffeeCardSkeleton from '../coffee-card/CoffeeCardSkeleton.svelte';

	const { coffeeList, updateCoffeeFromApi, isCoffeeLoading } = coffeeStore();

	const handler = () => {
		updateCoffeeFromApi();
	};

	onMount(() => {
		updateCoffeeFromApi();
	});
</script>

<div class="coffee-line">
	<div class="coffee-line__header">
		<span>Coffee line</span>
	</div>

	<div class="coffee-line__content-section">
		{#if $coffeeList}
			<div class="coffee-line__content-wrapper">
				<CoffeeList coffeeList={$coffeeList} />
			</div>
		{/if}
		{#if $isCoffeeLoading}
			<div class="coffee-line__content-wrapper">
				<CoffeeCardSkeleton />
			</div>
		{/if}
	</div>

	<div class="coffee-line__btn">
		<ButtonRounded on:click={handler} disabled={$isCoffeeLoading} />
	</div>
</div>

<style lang="scss">
	.coffee-line {
		width: auto;
		padding: 40px 40px 60px;
		font-weight: bold;

		&__header {
			font-size: 32px;
			line-height: 36px;
			margin-bottom: 25px;
		}

		&__content-wrapper {
			margin-bottom: 25px;
		}

		&__btn {
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
</style>
