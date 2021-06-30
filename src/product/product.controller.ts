import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@Controller('product')
@ApiTags('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() product: Product) {
    return this.productService.create(product);
  }
  // @Post()
  // create(@Body() createProductDto: CreateProductDto) {
  //   return this.productService.create(createProductDto);
  // }

  @Get()
  findAll() {

    return this.productService.findAll();
  }

  @ApiResponse({status: 404, description: 'No product with that id was found'})
  @Get(':id')
  findOne(@Param('id') id: Product["id"]) {
    
   
    //example branded id will not work here
    //const myid = 2313123;
    //return this.productService.findOne(myid)
    //but will work here
     //return this.productService.findOne(id);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productService.update(id, updateProductDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
