import { CoffeeDataDto, RawCoffeeDataDto, RawCoffeeImgDto } from './coffee.dto';

interface RawDataToCoffeeParam {
  rawCoffeeData: RawCoffeeDataDto;
  rawCoffeeImg: RawCoffeeImgDto;
}

export const rawDataToCoffee = ({
  rawCoffeeData,
  rawCoffeeImg,
}: RawDataToCoffeeParam): CoffeeDataDto => ({
  blend_name: rawCoffeeData.blend_name,
  origin: rawCoffeeData.origin,
  variety: rawCoffeeData.variety,
  notes: rawCoffeeData.notes,
  intensifier: rawCoffeeData.intensifier,
  image: rawCoffeeImg.file,
});
