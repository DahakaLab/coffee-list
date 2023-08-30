import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) Fail', () => {
    return request(app.getHttpServer()).get('/').expect(500);
  });

  it('/coffee/1 (GET) Ok', async () => {
    const res = await request(app.getHttpServer()).get('/coffee/1').expect(200);

    const keys = ['blend_name', 'origin', 'variety', 'notes', 'intensifier', 'image']
    keys.forEach((key) => expect(res.body).toHaveProperty(key))
    return res;
  });

  it('/coffee/string (GET) Fail', async () => {
    return request(app.getHttpServer()).get('/coffee/string').expect(400);
  });
});
