import {Test, TestingModule} from "@nestjs/testing";
import {SequelizeModule} from "@nestjs/sequelize";
import {DynamicModule, ForwardReference, INestApplication, Type, ValidationPipe} from "@nestjs/common";

interface NestModuleArgs {
  imports?: (Type | DynamicModule | Promise<any> | ForwardReference)[],
}

export async function SetupTestServer({imports}: NestModuleArgs = {imports: []}): Promise<INestApplication> {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'exanubes',
      password: 'exanubes',
      database: 'exanubes-db-test',
      autoLoadModels: true,
      synchronize: true,
      logging: false
    }), ...imports]
  }).compile()
  const app = moduleFixture.createNestApplication()
  return app.init()
}
