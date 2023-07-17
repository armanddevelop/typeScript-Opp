import { faker } from '@faker-js/faker';
import { ProductHttpService } from './service/product-http.service';

const productHttp = new ProductHttpService();

const responses = async () => {
  const getAll = await productHttp.getAll();

  console.log('esto vale getAll ', getAll.length);
  const productId = getAll[0].id;
  const update = await productHttp.update(productId, {
    title: 'editando el nuevo producto',
    price: 25.35,
    description: 'cambiado los valores del producto',
  });
  console.log('Esto vale update ', update);
  const findOne = await productHttp.findOne(94);
  console.log('Esto vale findOne ', findOne);
  const create = await productHttp.create({
    title: 'producto Creado nuevo',
    price: 18.5,
    description: 'producto nuevo creado',
    images: [''],
    creationAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    categoryId: 2,
  });
  console.log('esto val create ', create);
};
responses();
