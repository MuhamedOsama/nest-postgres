import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>, private connection: Connection){}
  create(product: Product): Product{
    return this.productRepository.create(product);
  }
  findAll(): Promise<Product[]>{
    return this.productRepository.find()
  }
  findOne(id: Product["id"]): Promise<Product>{
    return this.productRepository.findOne(id)
  }
  async remove(id: string): Promise<void>{
    await this.productRepository.delete(id);
  }

  //transactions - unit of work example
  async createMany(products: Product[]) {
    const queryRunner = this.connection.createQueryRunner();
  
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(products[0]);
      await queryRunner.manager.save(products[1]);
  
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }
}