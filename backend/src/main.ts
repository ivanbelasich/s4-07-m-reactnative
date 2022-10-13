import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Ta$ks App')
    .setDescription('The Ta$ks App API description')
    .setContact(
      'Ta$ks',
      'https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md',
      'tasksapp@tasks.com',
    )
    .setVersion('1.0')
    .addTag('auth')
    .addTag('users')
    .addTag('jobcards')
    .addTag('comments')
    .addTag('notifications')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
