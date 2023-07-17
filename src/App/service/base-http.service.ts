import axios from 'axios';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dto/products.dto';
import { UpdateCategoryDto } from '../dto/category.dto';

export class BaseHttpService<TypeClass> {
  constructor(protected url: string) {}
  async getAll() {
    try {
      const { data } = await axios.get<TypeClass[]>(this.url);
      return data;
    } catch (error) {
      console.error('[getAllError]: ', error);
      return [];
    }
  }
  async update<ID, DTO>(id: ID, changes: DTO) {
    try {
      const updateUrl = `${this.url}/${id}`;
      const { data } = await axios.put<TypeClass>(updateUrl, changes);
      return data;
    } catch (error) {
      console.error('[updateError]: ', error);
      return {};
    }
  }
}

// const service = new BaseHttpService<string>();
// const service1 = new BaseHttpService<Category>();
// service.getAll();
// service1.getAll();

(async () => {
  const urlProducts = 'https://api.escuelajs.co/api/v1/products';
  const urlCategories = 'https://api.escuelajs.co/api/v1/categories';
  const productsService = new BaseHttpService<Product>(urlProducts);
  const categoryService = new BaseHttpService<Category>(urlCategories);
  productsService.update<Product['id'], UpdateProductDto>(1, {
    title: 'cambiado el titulo del producto',
    price: 15.8,
  });
  categoryService.update<Category['id'], UpdateCategoryDto>(1, {});
})();
