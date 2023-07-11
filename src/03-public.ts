export class MyDate {
  year: number;
  moth: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.moth = month;
    this.day = day;
  }
  printFormat(): string {
    return `Date: ${this.day}/${this.moth}/${this.year} `;
  }
  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this.day += amount;
        break;
      case 'months':
        this.moth += amount;
      case 'years':
        this.year = amount;
      default:
        break;
    }
  }
}

const myDate = new MyDate(2023, 7, 10);
myDate.add(2, 'days');
console.log(myDate.printFormat());
