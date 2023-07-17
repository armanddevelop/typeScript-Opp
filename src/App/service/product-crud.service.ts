import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dto/products.dto';
import { ProductHttpService } from './product-http2.service';

export class ProductCrudService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], changes: UpdateProductDto) {
    return await this.http.update(id, changes);
  }
}
