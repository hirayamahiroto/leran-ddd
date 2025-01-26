export class MenuPrice {
  private constructor(private readonly _value: number) {
    this.validate(_value);
  }

  static create(price: number): MenuPrice {
    return new MenuPrice(price);
  }

  get value(): number {
    return this._value;
  }

  private validate(value: number): void {
    if (value < 0) {
      throw new Error("価格は0以上である必要があります");
    }
    if (!Number.isInteger(value)) {
      throw new Error("価格は整数である必要があります");
    }
  }

  equals(other: MenuPrice): boolean {
    return this._value === other.value;
  }
}
