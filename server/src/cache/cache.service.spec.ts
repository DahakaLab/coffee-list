import { Test, TestingModule } from '@nestjs/testing';

import { CacheService } from './cache.service';
import { LoggerService } from 'src/logger/logger.service';

describe('CacheService', () => {
  let service: CacheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerService, CacheService],
      exports: [CacheService],
    }).compile();

    service = module.get<CacheService>(CacheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
