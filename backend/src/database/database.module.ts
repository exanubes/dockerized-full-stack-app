import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigService} from "@nestjs/config";
import {DatabaseConfig} from "../config/database.config";

@Module({
  imports: [SequelizeModule.forRootAsync({
    inject: [ConfigService],
    useFactory(configService: ConfigService){
      const databaseConfig = configService.get<DatabaseConfig>('database')
      return {
        dialect: 'postgres',
        host: databaseConfig.host,
        port: databaseConfig.port,
        username: databaseConfig.user,
        password: databaseConfig.password,
        database: databaseConfig.name,
        autoLoadModels: true,
        synchronize: false,
      }
    }

  })]
})
export class DatabaseModule {}
