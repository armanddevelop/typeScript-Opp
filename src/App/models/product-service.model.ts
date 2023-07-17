import { CreateProductDto, UpdateProductDto } from '../dto/products.dto';
import { Product } from './product.model';

export interface ProductService {
  getAll(): Promise<Product[] | []> | Product[];
  update(
    id: Product['id'],
    changes: UpdateProductDto
  ): Product | Promise<Product> | {};
  create(data: CreateProductDto): Product | Promise<Product | undefined>;
  findOne(id: Product['id']): Product | Promise<Product | {}> | {};
}
