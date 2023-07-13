export abstract class Animal {
  constructor(protected name: string) {}
  move() {
    console.log(`${this.name} is moving`);
  }
  greeting() {
    return `Hello greetings my name is ${this.name}`;
  }
  protected dotrick() {
    console.log('trick!!!');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    //super comes from father class
    super(name);
  }
  bark(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`barking!!! ${this.name}`);
    }
    this.dotrick();
  }
  move(): void {
    console.log('moving as a dog');
    super.move();
  }
}

// const fifi = new Animal('fifi');
// fifi.move();
// console.log(fifi.greeting());

const dog = new Dog('tobiaz', 'licha');
//dog.name = 'chue';
console.log(dog.greeting());
dog.bark(5);
console.log(dog.owner);
dog.move();
