import { faker } from '@faker-js/faker';
import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dto/products.dto';
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService {
  private _products: Product[] = [];
  getAll(): Product[] | Promise<Product[] | []> {
    return this._products;
  }
  get products() {
    return this._products;
  }
  add(newProduct: Product) {
    this._products.push(newProduct);
    return newProduct;
  }

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      categoryId: data.categoryId,
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    };
    return this.add(newProduct);
  }

  update(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this._products.findIndex((item) => item.id === id);
    const prevData = this._products[index];
    this._products[index] = {
      ...prevData,
      ...changes,
    };
    return this._products[index];
  }

  findOne(idProduct: Product['id']): object {
    const product = this._products.find(({ id }) => id === idProduct);
    if (product) {
      return product;
    }
    return {};
  }
}
