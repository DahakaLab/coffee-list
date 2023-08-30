<script lang="ts">
	export let src: string;
	export let alt: string = '';
	export let placeholder: string | undefined = undefined;

	let isLoad = true;

	const onloadHandler = () => {
		isLoad = false;
	};
</script>

<div class="{$$restProps.class || ''} image">
	<img {src} on:load={onloadHandler} {alt} />
	{#if isLoad && placeholder}
		<div class="image__placeholder">
			{#if alt}
				<span>{alt}</span>
			{/if}
			<span>{placeholder}</span>
		</div>
	{/if}
</div>

<style lang="scss">
	.image {
		position: relative;
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}

		&__placeholder {
			position: absolute;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-color: lightblue;

			span {
				display: block;
				font-size: 25px;
				color: darkblue;
			}
		}
	}
</style>
