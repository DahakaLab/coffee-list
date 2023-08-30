<script lang="ts">
	import PlusSVG from '$lib/svg/plus.svg?component';

	export let disabled: boolean = false;
</script>

<button on:click {disabled} class="{$$restProps.class || ''} rounded-btn">
	<PlusSVG class="rounded-btn__svg" />
</button>

<style lang="scss">
	.rounded-btn {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		fill: white;
		background-color: blue;
		border: 1px solid darkblue;
		cursor: pointer;
		box-shadow: 0px 0px 10px lightgray;
		padding: 10px;
		transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease,
			fill 0.15s ease;

		&__svg {
			width: 100%;
			height: 100%;
		}

		&:hover {
			box-shadow: 0px 0px 15px blue;
		}

		&:active {
			background-color: lightblue;
		}

		&:disabled {
			cursor: auto;
			box-shadow: none;
			background-color: lightgray;
			border-color: gray;
			fill: white;
		}
	}
</style>
