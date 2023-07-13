import axios from 'axios';
const url = 'https://api.escuelajs.co/api/v1/products';
(async () => {
  const delay = (time: number) => {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };
  // delay(2000)
  //   .then((data) => console.log(data))
  //   .catch((e) => console.error(e));
  const getProducts = async () => {
    const promise = await axios.get(url);
    return promise.data;
  };
  const flag = await delay(3000);
  console.log('esto vale flag ', flag);
  console.log('----'.repeat(10));
  const products = await getProducts();
  console.log('Esto tiene products ', products);
})();
