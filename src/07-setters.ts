export class MyDate {
  constructor(
    public year: number = 1986,
    private _month: number = 1,
    private _day: number = 1
  ) {}

  private _addPadding(value: number) {
    if (value < 10) return `0${value}`;

    return `${value}`;
  }

  printFormat(): string {
    const day = this._addPadding(this._day);
    const month = this._addPadding(this._month);
    return `Date: ${day}/${month}/${this.year} `;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this._day += amount;
        break;
      case 'months':
        this._month += amount;
      case 'years':
        this.year = amount;
      default:
        break;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month value is out of date');
    }
  }
}
const myDate = new MyDate();
console.log(myDate.printFormat());
//set month
myDate.month = 9;
//get month
console.log('run ', myDate.month);
//set month
myDate.month = 55;
//get month
console.log(myDate.month);
