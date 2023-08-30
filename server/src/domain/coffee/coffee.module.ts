import { Module } from '@nestjs/common';

import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import { LoggerService } from 'src/logger/logger.service';
import { CacheService } from 'src/cache/cache.service';
import { ApiClientService } from 'src/api-client/api-client.service';

@Module({
  controllers: [CoffeeController],
  providers: [CoffeeService, LoggerService, CacheService, ApiClientService],
})
export class CoffeeModule {}
