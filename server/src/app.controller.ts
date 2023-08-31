import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/get-error')
  getError(): string {
    throw new Error('Special error.');
  }
}
