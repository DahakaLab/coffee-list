import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getError(): string {
    throw new Error('Special error.');
  }
}
