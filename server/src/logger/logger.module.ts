import { Module } from '@nestjs/common';
import { AsyncLocalStorage } from 'node:async_hooks';

import { LoggerService } from './logger.service';
import { ASYNC_STORAGE } from './logger.constants';

const asyncLocalStorage = new AsyncLocalStorage();

@Module({
  providers: [
    LoggerService,
    {
      provide: ASYNC_STORAGE,
      useValue: asyncLocalStorage,
    },
  ],
  exports: [LoggerService],
})
export class LoggerModule {}
