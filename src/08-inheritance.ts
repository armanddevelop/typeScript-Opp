export class Animal {
  constructor(public name: string) {}
  move() {
    console.log(`${this.name} is moving`);
  }
  greeting() {
    return `Hello greetings my name is ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  bark(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('barking');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const dog = new Dog('tobiaz', 'licha');
dog.move();
console.log(dog.greeting());
dog.bark(10);
console.log(dog.owner);
