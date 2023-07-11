export class MyDate {
  year: number;
  moth: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.moth = month;
    this.day = day;
  }
}

const myDate = new MyDate(2023, 7, 10);
console.log(myDate);
