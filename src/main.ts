import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { InternalServerErrorException, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Quiz Api')
    .setDescription('This api for quiz game on English space')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Автоматически преобразует объекты к нужному типу
      whitelist: true, // Удаляет свойства, которые отсутствуют в DTO
      forbidNonWhitelisted: true, // Генерирует ошибку, если обнаружены невалидные поля
      exceptionFactory: (errors) => {
        const messages = errors.map(
          (error) =>
            `${error.property} - ${Object.values(error.constraints).join(', ')}`,
        );
        return new InternalServerErrorException(messages);
      },
    }),
  );
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: '*',
  });

  app.use(cookieParser());
  await app.listen(app.get(ConfigService).get('port'));
}

bootstrap();
