import { Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

import { CacheService } from 'src/cache/cache.service';
import { ApiClientService } from 'src/api-client/api-client.service';
import { CoffeeDataDto, RawCoffeeDataDto, RawCoffeeImgDto } from './coffee.dto';
import { LoggerService } from 'src/logger/logger.service';
import { rawDataToCoffee } from './coffee.adapters';

@Injectable()
export class CoffeeService {
  constructor(
    private readonly logger: LoggerService,
    private readonly cache: CacheService,
    private readonly apiClientService: ApiClientService,
  ) {}

  private async checkData(dto: any, data: any) {
    const plainingData = plainToClass(dto, data);

    const errors = await validate(plainingData);

    if (errors.length > 0) {
      throw new Error(`Raw data is invalid: ${errors.toString()}`);
    }
  }

  async getExternalCoffeeData() {
    const [rawCoffeeData, rawCoffeeImg] = await Promise.all([
      this.apiClientService.getRandomCoffeeData(),
      this.apiClientService.getRandomCoffeeImg(),
    ]);

    await Promise.all([
      this.checkData(RawCoffeeDataDto, rawCoffeeData),
      this.checkData(RawCoffeeImgDto, rawCoffeeImg),
    ]);

    return rawDataToCoffee({
      rawCoffeeData,
      rawCoffeeImg,
    });
  }

  async getCachedValue(item: number) {
    const value = await this.cache.get(item.toString());
    return value;
  }

  async setCachedValue(item: number, coffeeData: CoffeeDataDto) {
    const value = await this.cache.set(item.toString(), coffeeData);
    return value;
  }

  async getCoffeeItem(item: number) {
    const cachedCoffee = await this.getCachedValue(item);

    if (cachedCoffee === null) {
      const coffeeData = await this.getExternalCoffeeData();
      this.setCachedValue(item, coffeeData);
      return coffeeData;
    }

    this.logger.log('Returned cached value.');
    return cachedCoffee;
  }
}
