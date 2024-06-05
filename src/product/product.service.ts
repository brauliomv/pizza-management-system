import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { createProductDto } from './dto/create-product.dto';
import { updateProductDto } from './dto/update-product.dto';

//ProductServices se comunica con la base de datos para realizar operaciones

@Injectable()
export class ProductService {

    //Se importa la clase usuario, se convierte en un repositorio de TypeORM y a partir de aquí se pueden realizar las consultas
    constructor(@InjectRepository(Product) private productRepository:Repository<Product>){}

    async createProduct(product:createProductDto){//Primero se recibe como parámetro el producto a crear, los tipos de datos se reciben desde el dto

      const productFound = await this.productRepository.findOne({
        where:{
          code: product.code
        }
      });


    //Se crea a través del repositorio creado anteriormente
    if(productFound){
        return new HttpException('Este código producto ya existe',400)
    }

    const newProduct = this.productRepository.create(product);
    this.productRepository.save(newProduct);
  };
    
    //Obtener productos
    getProducts(){
     return this.productRepository.find();
    }

    //Obtener producto mediante id
    getProduct(id:number){
      return this.productRepository.findOne({
        where: {
          id
        }
      });
    }

    //Eliminar producto mediante id
    deleteProduct(id:number){
      return this.productRepository.delete(id);
    }

    //Actualizar datos del producto
    updateProduct(id:number, product:updateProductDto){
      return this.productRepository.update(id,product )
    }
}
