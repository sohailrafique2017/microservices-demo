import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);

  const config = new DocumentBuilder()
    .setTitle('Nest Microservice Backend')
    .setDescription('Nest Microservice Backend APIs')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'authorization', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();
  // Create Swagger API Document
  const document = SwaggerModule.createDocument(app, config);

  // Setup Swagger Endpoint
  SwaggerModule.setup('/', app, document);

  await app.listen(process.env.port ?? 3000);
}
bootstrap();
