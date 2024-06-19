import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsePipes, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  //Se usa para validaciones de datos, en este caso de los dto, para usarlo se debe instalar el paquete class-validator y class-transformer

  //A través del parámetro whitelist se permitirá que solamente los elementos del DTO que estén decorados pasen de la solicitud
  //El forbidNonWhiteListed prohibe todos los elementos que no están en whitelist y muestra un mensaje al hacer el request
  app.useGlobalPipes(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true})); 
  await app.listen(3000);
}
bootstrap();
