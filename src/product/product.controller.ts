import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { createProductDto } from './dto/create-product.dto';
import { updateProductDto } from './dto/update-product.dto';




@Controller('product')
export class ProductController {

    constructor(private productsService:ProductService){}

    //Recibimos los datos desde el cliente
    @Post()
    createProduct(@Body() newProduct:createProductDto){
       return this.productsService.createProduct(newProduct);
    }

    @Get()
    getProducts(){
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id', ParseIntPipe) id:number){
        return this.productsService.getProduct(id);
    }

    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id:number){
        return this.productsService.deleteProduct(id);
    }
    

    @Patch(':id')
    updateProduct(@Param('id', ParseIntPipe) id:number, @Body() product:updateProductDto){
       return this.productsService.updateProduct(id, product);
    }
}
