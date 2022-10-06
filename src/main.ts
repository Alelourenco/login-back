import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    //config swagger
  const config = new DocumentBuilder()
    .setTitle('Documentação da API de login')
    .setDescription('API de login.')
    .setVersion('1.0')
    .addTag('login')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

   // Pipes
   app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );  

  await app.listen(3000);
}
bootstrap();
