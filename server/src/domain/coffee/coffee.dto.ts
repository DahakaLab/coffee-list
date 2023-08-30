import { IsString, IsUrl } from 'class-validator';

export class RawCoffeeDataDto {
  id: number;
  uid: string;

  @IsString()
  blend_name: string;

  @IsString()
  origin: string;

  @IsString()
  variety: string;

  @IsString()
  notes: string;

  @IsString()
  intensifier: string;
}

export class RawCoffeeImgDto {
  @IsUrl()
  file: string;

  license: string;
  owner: string;
  width: number;
  height: number;
  filter: string;
  tags: string;
  tagMode: string;
}

export class CoffeeDataDto {
  @IsString()
  blend_name: string;

  @IsString()
  origin: string;

  @IsString()
  variety: string;

  @IsString()
  notes: string;

  @IsString()
  intensifier: string;

  @IsUrl()
  image: string;
}
