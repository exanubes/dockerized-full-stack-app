import { SetupTestServer } from '../utils/setup-test-server';
import { User } from '../../src/user/user.entity';
import { HttpServer, HttpStatus, INestApplication } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import * as request from 'supertest';
import { UserModule } from "../../src/user/user.module"

describe(`[Feature] User - /user`, () => {
  let app: INestApplication;
  let httpServer: HttpServer;
  let userRepository: Repository<User>;
  beforeAll(async () => {
    app = await SetupTestServer({ imports: [UserModule] });
    userRepository = app.get('UserRepository');
    httpServer = app.getHttpServer();
    await userRepository.create({ name: 'Jack' } as User);
  });
  it('Returns users', async () => {
    const res = await request(httpServer).get('/user');
    expect(res.status).toBe(HttpStatus.OK);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].name).toBe('Jack');
  });
  afterAll(async () => {
    await userRepository.destroy({ where: {}, force: true });
  });
});
