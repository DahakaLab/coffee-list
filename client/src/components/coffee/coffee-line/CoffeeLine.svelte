<script lang="ts">
	import { onMount } from "svelte";

  import { coffeeStore } from "$store/coffeeStore";
	import CoffeeList from "../coffee-list/CoffeeList.svelte";
	import ButtonRounded from "$components/common/button-rounded/ButtonRounded.svelte";

  const { coffeeList, updateCoffeeFromApi, isCoffeeLoading } = coffeeStore();

  const handler = () => {
    updateCoffeeFromApi();
  }

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
      <CoffeeList coffeeList={$coffeeList} />
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

    &__content-section {
      margin-bottom: 25px;
    }

    &__btn {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>