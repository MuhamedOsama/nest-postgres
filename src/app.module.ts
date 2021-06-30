import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { DatabaseModule } from './database/database.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ProductModule, DatabaseModule, OrderModule],
  controllers: []
})
export class AppModule {}
