import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,POST,OUT,PATCH,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(process.env.PORT || 1024);
}
bootstrap();
