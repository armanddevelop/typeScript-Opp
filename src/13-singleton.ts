export class MyService {
  private constructor(private name: string) {}
  static instance: MyService | null = null;
  static create(name: string) {
    if (MyService.instance === null) {
      console.log('dentro de create, entrar una vez');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
  getService() {
    return this.name;
  }
}

const myService1 = MyService.create('dataDB');
const myService2 = MyService.create('axios');

console.log(myService1.getService());
console.log(myService2.getService());
console.log(myService1 === myService2);
