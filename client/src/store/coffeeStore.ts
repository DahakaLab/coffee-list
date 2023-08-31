import type { Coffee } from '$types/coffee';
import { storeFactory } from '$utils/storeFactory';
import { coffeeMethods } from '$api-methods/coffee';
import { getCoffee } from '$adapters/coffee/coffee';

const { useStore: useCoffeeStore, useCreateEffect: useCoffeeCreateEffect } = storeFactory<Coffee[]>(
	[]
);

const { useStore: useIsLoadingStore, useNewDataEvent: useIsLoadingNewDataEvent } =
	storeFactory<boolean>(false);

const coffeeList = useCoffeeStore();

const isCoffeeLoading = useIsLoadingStore();
const setIsLoading = useIsLoadingNewDataEvent();

const handleGetCoffeeItem = async (): Promise<Coffee> => {
	setIsLoading(true);
	const currentCoffeeCounts = coffeeList.getState().length;
	const coffeeItem = currentCoffeeCounts + 1;
	const coffee = await coffeeMethods.getItem(coffeeItem);
	setIsLoading(false);
	return getCoffee(coffee);
};
const updateCoffeeFromApi = useCoffeeCreateEffect<Coffee>(handleGetCoffeeItem, (state, payload) => [
	...state,
	payload
]);

export const coffeeStore = () => {
	return {
		coffeeList,
		isCoffeeLoading,
		updateCoffeeFromApi
	};
};
