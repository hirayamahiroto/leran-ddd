export class MenuName {
  private constructor(private readonly _value: string) {
    this.validate(_value);
  }

  static create(name: string): MenuName {
    return new MenuName(name);
  }

  get value(): string {
    return this._value;
  }

  private validate(value: string): void {
    if (!value || value.trim().length === 0) {
      throw new Error("メニュー名は必須です");
    }
    if (value.length > 100) {
      throw new Error("メニュー名は100文字以内である必要があります");
    }
  }

  equals(other: MenuName): boolean {
    return this._value === other.value;
  }
}
