import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(product: Product): Product;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    remove(id: string): Promise<void>;
}
