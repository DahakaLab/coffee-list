import type { CoffeeApi } from "$types/api/coffeeApi";
import type { Coffee } from "$types/coffee";

export const getCoffee = ({ blend_name, image, intensifier, notes, origin, variety }: CoffeeApi): Coffee => {
  return {
    blendName: blend_name,
    image,
    intensifier,
    notes: notes.split(', '),
    origin,
    variety
  }
}