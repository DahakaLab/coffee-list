import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import { LoggerService } from 'src/logger/logger.service';
import { CacheService } from 'src/cache/cache.service';
import { ApiClientService } from 'src/api-client/api-client.service';

describe('CoffeeController', () => {
  let controller: CoffeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeController],
      providers: [CoffeeService, LoggerService, CacheService, ApiClientService],
    }).compile();

    controller = module.get<CoffeeController>(CoffeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
