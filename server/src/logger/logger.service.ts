import { Injectable, Inject } from '@nestjs/common';
import { ConsoleLogger } from '@nestjs/common';

import type { TraceIdStore } from 'src/trace-id-store/trace-id-store.types';
import { ASYNC_STORAGE } from './logger.constants';

@Injectable()
export class LoggerService extends ConsoleLogger {
  constructor(
    @Inject(ASYNC_STORAGE) private readonly asyncStorage?: TraceIdStore,
  ) {
    super();
  }

  error(message: any, stack?: string, context?: string) {
    const traceId = this.asyncStorage?.getStore()?.get('traceId');

    super.error(`${traceId || ''}: ${message}`, stack, context);
  }
}
