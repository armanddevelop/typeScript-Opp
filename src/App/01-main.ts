import axios from 'axios';
import { Product } from './models/product.model';
const url = 'https://api.escuelajs.co/api/v1/products';

(async () => {
  const getProducts = async (): Promise<Product[]> => {
    try {
      const { data } = await axios.get<Product[]>(url);
      return data;
    } catch (error) {
      console.error('[getPRoductsError]: ', error);
      return [];
    }
  };
  console.log('----'.repeat(10));
  const products = await getProducts();
  console.log(
    products.map(({ id, title, price }) => `${id}: ${title} - ${price}`)
  );
})();
