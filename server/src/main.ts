import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './logger/logger.service';
import { getTraceIdStoreMiddleware } from './trace-id-store/trace-id-store.middleware';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.use(getTraceIdStoreMiddleware(app));

  app.useLogger(app.get(LoggerService));

  await app.listen(3000);
};
bootstrap();
