<script lang="ts">
	import type { TagType } from './types';

	export let type: TagType = 'success';
</script>

<div class="tag tag--{type}">
	<slot />
</div>

<style lang="scss">
	.tag {
		color: darkblue;
		font-size: 14px;
		line-height: 20px;
		font-weight: bold;
		padding: 4px 8px;
		border-radius: 10px;
		white-space: nowrap;

		&--warning {
			background-color: lightyellow;
		}

		&--success {
			background-color: lightgreen;
		}

		&--success {
			background-color: lightcoral;
		}

		&--info {
			background-color: lightblue;
		}
	}
</style>
