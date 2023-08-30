<script lang="ts">
	import { Svroller } from 'svrollbar';

	import Image from "$components/common/image/Image.svelte";
	import Tag from "$components/common/tag/Tag.svelte";
  import type { Coffee } from "$types/coffee";

  export let coffee: Coffee;
</script>

<div class="coffee-card">
  <div class="coffee-card__img">
    <Image src={coffee.image}/>
    <span>{coffee.intensifier}</span>
  </div>
  <div class="coffee-card__content-section">
    <span class="coffee-card__note">{coffee.origin}</span>
    <span class="coffee-card__heading">{coffee.blendName}</span>
    <span>{coffee.variety}</span>
  </div>
  <div class="coffee-card__notes-section">
    <Svroller width="100%" height="100%" alwaysVisible>
      <div class="coffee-card__notes-container">
        {#each coffee.notes as note}
          <div class="coffee-card__tag">
            <Tag type="info">{note}</Tag>
          </div>
        {/each}
      </div>
    </Svroller>
  </div>
</div>

<style lang="scss">
  .coffee-card {
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 10px 20px lightgray;
    padding-bottom: 20px;

    &__img {
      position: relative;
      width: 100%;
      height: 250px;

      span {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 25px;
        color: white;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
      }
    }

    &__content-section {
      padding: 10px;

      span {
        display: block;
      }
    }

    &__note {
      color: gray;
    }

    &__heading {
      font-size: 25px;
      line-height: 40px;
      font-weight: bold;
    }

    &__notes-section {
      padding-left: 10px;
      width: 100%;
    }

    &__notes-container {
      display: flex;
      width: 100%;
      cursor: e-resize;
    }

    &__tag {
      & + & {
        margin-left: 8px;
      }
    }
  }
</style>