<script lang="ts">
  import '$lib/css/normalize.css';
  import '$lib/css/scrollbar.css';
</script>

<div class="layout">
  <slot />
</div>

<style lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>