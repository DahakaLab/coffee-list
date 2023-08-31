import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';

import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class CacheService {
  private readonly client = createClient();

  constructor(private readonly logger: LoggerService) {
    logger.setContext(CacheService.name);
  }

  async onApplicationBootstrap() {
    await this.client.connect();
    this.client.on('error', (err) => {
      throw new Error(err);
    });
    this.logger.log('Redis on error listener has been added.');
  }

  async onModuleDestroy() {
    if (this.client.isOpen) {
      await this.client.disconnect();
    }
  }

  async set(key: string, value: any) {
    try {
      if (!this.client.isOpen) {
        await this.client.connect();
      }

      const res = await this.client.hSet('cache', key, JSON.stringify(value));
      await this.client.expire('cache', 30 * 60);

      this.logger.log(`New value cached with key '${key}'`);

      return res;
    } catch (err) {
      throw new Error(err);
    }
  }

  async get(key: string) {
    try {
      if (!this.client.isOpen) {
        await this.client.connect();
      }

      const value = await this.client.hGet('cache', key);
      await this.client.expire('cache', 30 * 60);

      return JSON.parse(value);
    } catch (err) {
      throw new Error(err);
    }
  }
}
