<script lang="ts">
  export let src: string;
</script>

<div class="{$$restProps.class || ''} image">
  <img
    src={src}
    alt=""
  >
</div>

<style lang="scss">
  .image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
</style>