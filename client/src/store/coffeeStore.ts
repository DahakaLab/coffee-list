import type { Coffee } from "$types/api/coffee";
import { storeFactory } from "$utils/storeFactory"
import { coffeeMethods } from "$api-methods/coffee";

const {
  useStore: useCoffeeStore,
  useNewDataEvent: useCoffeeNewDataEvent,
  useCreateEffect: useCoffeeCreateEffect,
} = storeFactory<Coffee[]>([]);

const {
  useStore: useIsLoadingStore,
  useNewDataEvent: useIsLoadingNewDataEvent,
} = storeFactory<boolean>(false);

const coffeeList = useCoffeeStore();
const setNewCustomer = useCoffeeNewDataEvent();

const isCoffeeLoading = useIsLoadingStore();
const setIsLoading = useIsLoadingNewDataEvent();

const handleGetCoffeeItem = async () => {
  setIsLoading(true);
  const currentCoffeeCounts = coffeeList.getState().length;
  const coffeeItem = currentCoffeeCounts + 1;
  const coffee = await coffeeMethods.getItem(coffeeItem);
  setIsLoading(false);
  return coffee;
}
const updateCoffeeFromApi = useCoffeeCreateEffect<Coffee>(handleGetCoffeeItem, (state, payload) => {
  state.push(payload);
});

export const coffeeStore = () => {
  return {
    coffeeList,
    isCoffeeLoading,
    updateCoffeeFromApi,
  }
}