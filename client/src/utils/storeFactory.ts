import type { AxiosError } from 'axios';
import { createStore, createEvent, createEffect } from 'effector';

type Reducer<State, Payload> = (state: State, payload: Payload) => void | State;

export const storeFactory = <State>(initValue: State) => {
	const currentStore = createStore<State>(initValue);

	const createStoreEvent = <Payload = State>(reducer: Reducer<State, Payload>) => {
		const event = createEvent<Payload>();
		currentStore.on(event, reducer);
		return event;
	};

	const useCreateEffect = <Payload = State, Params = void>(
		handler: Function,
		reducer: Reducer<State, Payload>
	) => {
		const effect = createEffect<Params, Payload, AxiosError>(handler);
		currentStore.on<Payload>(effect.doneData, reducer);
		return effect;
	};

	const changeEvent = createStoreEvent<State>((_, payload) => payload);

	return {
		createStoreEvent,
		useStore: () => currentStore,
		useNewDataEvent: () => changeEvent,
		useChangeEvent: <Payload = State>(reducer: Reducer<State, Payload>) =>
			createStoreEvent(reducer),
		useCreateEffect
	};
};
