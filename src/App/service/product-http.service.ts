import axios from 'axios';
import { ProductService } from '../models/product-service.model';
import { Product } from '../models/product.model';
import { UpdateProductDto, CreateProductDto } from '../dto/products.dto';

export class ProductHttpService implements ProductService {
  private urlBase: string = 'https://api.escuelajs.co/api/v1/products';
  async getAll(): Promise<Product[] | []> {
    try {
      const { data } = await axios.get<Product[]>(this.urlBase);
      return data;
    } catch (error) {
      console.error('[getAllError]: ', error);
      return [];
    }
  }
  async update(id: Product['id'], changes: UpdateProductDto) {
    try {
      const url = `${this.urlBase}/${id}`;
      const { data } = await axios.put<Product>(url, changes);
      return data;
    } catch (error) {
      console.error('[updateError]: ', error);
      return {};
    }
  }
  async create(newProduct: CreateProductDto) {
    try {
      const { data } = await axios.post<Product>(this.urlBase, newProduct);
      return data;
    } catch (error: any) {
      console.error('[createError]: ', error);
      return undefined;
    }
  }
  async findOne(id: Product['id']) {
    try {
      const url = `${this.urlBase}/${id}`;
      const { data } = await axios.get<Product>(url);
      return data;
    } catch (error) {
      console.error('[findOneError]: ', error);
      return {};
    }
  }
}
