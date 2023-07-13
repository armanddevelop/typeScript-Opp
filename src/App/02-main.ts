import { faker } from '@faker-js/faker';
import { CreateProductDto } from './dto/products.dto';
import { ProductMemoryService } from './service/product-memory.service';

const productService = new ProductMemoryService();
const newProduct1: CreateProductDto = {
  categoryId: 15615,
  title: 'nuevo producto 1',
  price: 33,
  description: 'coca cola ligth',
  images: [''],
  creationAt: faker.date.recent(),
  updatedAt: null,
};
const newProduct2: CreateProductDto = {
  categoryId: 12,
  title: 'nuevo producto 2',
  price: 20.25,
  description: 'raid mata bichos',
  images: [''],
  creationAt: faker.date.recent(),
  updatedAt: null,
};
productService.create(newProduct1);
productService.create(newProduct2);
const productsId = productService.products[0].id;
productService.update(productsId, { title: 'modificando el producto' });
const updateProduct = productService.findOne(productsId);
console.log(updateProduct);
