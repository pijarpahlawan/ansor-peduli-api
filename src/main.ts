import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { HttpException } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port: number = configService.get('APP_PORT') || 3000;

  // enable cors
  app.enableCors();

  // setup helmet
  app.use(helmet());

  // use global pipes validation
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[]): any => {
        const firstErrorMessage =
          errors[0].constraints[Object.keys(errors[0].constraints)[0]];

        return new HttpException(
          {
            statusCode: HttpStatus.BAD_REQUEST,
            message: firstErrorMessage,
            error: 'Bad Request',
          },
          HttpStatus.BAD_REQUEST,
        );
      },
    }),
  );

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Ansor Peduli API')
    .setDescription('Aplikasi untuk program kemanusiaan dari GP Ansor')
    .setVersion('1.0')
    .addServer('http://localhost:' + port)
    .addServer(configService.get('SWAGGER_SERVER'))
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        in: 'header',
      },
      'access-token',
    )
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(port);
}
bootstrap();
