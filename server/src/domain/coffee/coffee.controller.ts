import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { coffeePaths } from './coffee.paths';
import { LoggerService } from 'src/logger/logger.service';
import { CoffeeService } from './coffee.service';

@Controller()
export class CoffeeController {
  constructor(
    private readonly coffeeService: CoffeeService,
    private readonly loggerService: LoggerService,
  ) {
    loggerService.setContext(CoffeeController.name);
  }

  @Get(coffeePaths.item)
  getCoffeeItem(@Param('item', ParseIntPipe) item: number) {
    this.loggerService.log(`getCoffeeItem: ${item}'`);
    return this.coffeeService.getCoffeeItem(item);
  }
}
