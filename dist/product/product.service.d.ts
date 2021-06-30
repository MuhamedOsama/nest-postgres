import { Connection, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
export declare class ProductService {
    private readonly productRepository;
    private connection;
    constructor(productRepository: Repository<Product>, connection: Connection);
    create(product: Product): Product;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    remove(id: string): Promise<void>;
    createMany(products: Product[]): Promise<void>;
}
