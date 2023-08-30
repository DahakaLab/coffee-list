import { INestApplication } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { ASYNC_STORAGE } from 'src/logger/logger.constants';

import type { TraceIdStore } from './trace-id-store.types';

export const getTraceIdStoreMiddleware =
  (app: INestApplication<any>) => (req: any, _res: any, next: () => void) => {
    const asyncStorage: TraceIdStore = app.get(ASYNC_STORAGE);
    const traceId = req.headers['x-request-id'] || uuidv4();
    const store = new Map().set('traceId', traceId);

    asyncStorage.run(store, () => {
      next();
    });
  };
