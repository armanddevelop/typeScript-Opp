export class MyDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

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

const myDate = new MyDate(2023, 7, 10);
console.log(myDate.printFormat());
console.log(myDate.getDay());
