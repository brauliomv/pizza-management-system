import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './product/product.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';



@Module(  {
  imports: [
    ProductModule,
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'pizza_system',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],//Lee todos los archivos donde se crearán las tablas o entidades
        synchronize:true,
      })
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
