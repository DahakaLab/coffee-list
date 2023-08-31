<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import { coffeeStore } from '$store/coffeeStore';
	import CoffeeList from '../coffee-list/CoffeeList.svelte';
	import ButtonRounded from '$components/common/button-rounded/ButtonRounded.svelte';
	import CoffeeCardSkeleton from '../coffee-card/CoffeeCardSkeleton.svelte';

	const NUMBER_OF_INTERVALS = 500;
	const INTERVAL_MS = 1000 * 30;

	const { coffeeList, updateCoffeeFromApi, isCoffeeLoading } = coffeeStore();

	let timerId: number | undefined;

	const removeInterval = () => {
		if (timerId) {
			clearInterval(timerId);
			timerId = undefined;
		}
	};

	const getCoffeeItem = () => {
		if (!$isCoffeeLoading) {
			updateCoffeeFromApi();
		}
	};

	const updateInterval = () => {
		removeInterval();

		if ($coffeeList.length < NUMBER_OF_INTERVALS) {
			timerId = setInterval(() => {
				if ($coffeeList.length >= NUMBER_OF_INTERVALS) {
					removeInterval();
				}

				getCoffeeItem();
			}, INTERVAL_MS);
		}
	};

	const handler = () => {
		updateInterval();
		getCoffeeItem();
	};

	onMount(() => {
		updateInterval();
		getCoffeeItem();
	});

	onDestroy(() => {
		removeInterval();
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
