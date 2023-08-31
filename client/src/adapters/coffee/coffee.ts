import type { CoffeeApi } from '$types/api/coffeeApi';
import type { Coffee } from '$types/coffee';

export const getCoffee = ({
	blend_name,
	image,
	intensifier,
	notes,
	origin,
	variety,
	image_owner,
	image_tags
}: CoffeeApi): Coffee => {
	return {
		blendName: blend_name,
		image,
		intensifier,
		notes: notes.split(', '),
		origin,
		variety,
		imageOwner: image_owner,
		imageTags: image_tags
	};
};
