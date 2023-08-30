<script lang="ts">
  import { coffeeStore } from "$store/coffeeStore";

  const { coffeeList, updateCoffeeFromApi, isCoffeeLoading } = coffeeStore();

  const handler = () => {
    updateCoffeeFromApi();
  }

  const test = () => {
    console.log($coffeeList)
  }
</script>

<h1>Coffee line</h1>
<button on:click={handler} disabled={$isCoffeeLoading}>CLick!</button>
<button on:click={test}>CLick 2!</button>