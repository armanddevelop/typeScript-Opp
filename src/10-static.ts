console.log('Original', Math.PI);
console.log('Original', Math.max(1, 2, 3, 4, 8));

class MyMath {
  static readonly PI = 3.14;
  static max(...args: number[]) {
    return args.reduce((acc, value) => {
      if (acc < value) {
        acc = value;
      }
      return acc;
    });
  }
}

// const math = new MyMath();
// math.PI;
console.log(MyMath.PI);
console.log(MyMath.max(-1, -15, -30));
