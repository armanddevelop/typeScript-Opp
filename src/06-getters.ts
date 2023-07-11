export class MyDate {
  constructor(
    public year: number = 1986,
    public month: number = 1,
    private _day: number = 1
  ) {}

  private _addPadding(value: number) {
    if (value < 10) return `0${value}`;

    return `${value}`;
  }

  printFormat(): string {
    const day = this._addPadding(this._day);
    const month = this._addPadding(this.month);
    return `Date: ${day}/${month}/${this.year} `;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this._day += amount;
        break;
      case 'months':
        this.month += amount;
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
}
const myDate = new MyDate();
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.isLeapYear);
const myDate2 = new MyDate(2008);
console.log(myDate2.isLeapYear);
