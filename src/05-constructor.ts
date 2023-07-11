export class MyDate {
  constructor(
    public year: number = 1986,
    public month: number = 1,
    private day: number = 1
  ) {}

  private _addPadding(value: number) {
    if (value < 10) return `0${value}`;

    return `${value}`;
  }

  printFormat(): string {
    const day = this._addPadding(this.day);
    const month = this._addPadding(this.month);
    return `Date: ${day}/${month}/${this.year} `;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this.day += amount;
        break;
      case 'months':
        this.month += amount;
      case 'years':
        this.year = amount;
      default:
        break;
    }
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate();
console.log(myDate.printFormat());
const myDate2 = new MyDate(2023);
console.log(myDate2.printFormat());
const myDate3 = new MyDate(2023, 7, 11);
console.log(myDate3.printFormat());
