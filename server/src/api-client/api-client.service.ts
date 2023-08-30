import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

import { apiClientPaths } from './api-client.paths';

@Injectable()
export class ApiClientService {
  private readonly transport = axios.create();

  private static getData({ data }: AxiosResponse) {
    return data;
  }

  async getRandomCoffeeData() {
    try {
      const resp = await this.transport.get(apiClientPaths.coffeeData);
      return ApiClientService.getData(resp);
    } catch (err) {
      throw new Error(err);
    }
  }

  async getRandomCoffeeImg() {
    try {
      const resp = await this.transport.get(apiClientPaths.coffeeImg);
      return ApiClientService.getData(resp);
    } catch (err) {
      throw new Error(err);
    }
  }
}
