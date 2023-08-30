import type { AsyncLocalStorage } from 'node:async_hooks';

export type TraceIdStore = AsyncLocalStorage<Map<string, string>>;
