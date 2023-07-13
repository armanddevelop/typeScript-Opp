export interface Driver {
  dataBase: string;
  password: string;
  port: number;
  connect(): void;
  disconnet(): string;
  isConnect(name: string): boolean;
}

// const driver: Driver = {
//   dataBase: '',
//   password: '',
//   port: 8080,

// };

class PostgresDriver implements Driver {
  constructor(
    public dataBase: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {}

  disconnet(): string {
    return 'Disconnect succesfully :)';
  }

  isConnect(name: string): boolean {
    return true;
  }
}

class SqlDriver implements Driver {
  constructor(
    public dataBase: string,
    public password: string,
    public port: number
  ) {}
  connect(): void {}
  disconnet(): string {
    return 'Diconnect succesfully :)';
  }
  isConnect(name: string): boolean {
    return false;
  }
}
