import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { isInScf } from './common/utils';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        //dbConnUrl
        const inScf = isInScf();
        if (inScf) {
          return <TypeOrmModuleOptions>{
            type: 'postgres',
            url: process.env.dbConnUrl,
            autoLoadEntities: true,
            synchronize: false, //attention: on live must be false
          };
        } else {
          return <TypeOrmModuleOptions>{
            type: 'postgres',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT as any,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            // charset: 'utf8mb4',
            // timezone: '+08:00',
            autoLoadEntities: true,
            synchronize: false,
            retryAttempts: 3,
            logging: false,
          };
        }
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
