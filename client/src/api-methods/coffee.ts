import type { Coffee } from "$types/api/coffeeApi";
import { transport } from "$utils/transport";

const baseUrl = (path = "") => `/coffee${path}`;

const coffeeUrls = {
  getItem: (item: number) => baseUrl(`/${item}`),
};

export const coffeeMethods = {
  getItem: async (item: number) => {
    const { data } = await transport.get<Coffee>(coffeeUrls.getItem(item));
    return data;
  },
};