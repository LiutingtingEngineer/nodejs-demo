import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ResponseInterceptor } from './api/interceptor/response.interceptor';
import { AppModule } from './app.module';

console.log('0000000');

async function bootstrap() {
  console.log('--noah start--');
  // console.log('process.env: ', process.env);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(9000);
  console.log('--noah bootstrap--');
}

bootstrap();
