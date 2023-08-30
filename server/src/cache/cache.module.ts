import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  providers: [LoggerService, CacheService],
  exports: [CacheService],
})
export class CacheModule {}
