import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { LoggerService } from 'src/logger/logger.service';
import { CacheService } from 'src/cache/cache.service';
import { ApiClientService } from 'src/api-client/api-client.service';

describe('CoffeeService', () => {
  let service: CoffeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeController],
      providers: [CoffeeService, LoggerService, CacheService, ApiClientService],
    }).compile();

    service = module.get<CoffeeService>(CoffeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
