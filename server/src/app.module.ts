import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { LoggerModule } from './logger/logger.module';
import { CacheModule } from './cache/cache.module';
import { CacheService } from './cache/cache.service';
import { CoffeeModule } from './domain/coffee/coffee.module';
import { ApiClientService } from './api-client/api-client.service';

@Module({
  imports: [CacheModule, CoffeeModule, LoggerModule],
  controllers: [AppController],
  providers: [CacheService, ApiClientService],
})
export class AppModule {}
