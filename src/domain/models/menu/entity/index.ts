import { MenuName } from "../valueObjects/menuName";
import { MenuPrice } from "../valueObjects/menuPrice";

export class Menu {
  private _name: MenuName;
  private _price: MenuPrice;

  private constructor(
    private readonly _id: number,
    name: MenuName,
    price: MenuPrice
  ) {
    this._name = name;
    this._price = price;
  }

  static create(props: MenuCreateProps): Menu {
    return new Menu(props.id, MenuName.create(props.name), MenuPrice.create(props.price));
  }

  // ゲッター
  get id(): number {
    return this._id;
  }

  get name(): MenuName {
    return this._name;
  }

  get price(): MenuPrice {
    return this._price;
  }

  // 値の更新メソッド
  changeName(name: string): void {
    this._name = MenuName.create(name);
  }

  changePrice(price: number): void {
    this._price = MenuPrice.create(price);
  }

  // 等価性の比較（IDによる比較）
  equals(other: Menu): boolean {
    return this._id === other.id;
  }

  // DTOへの変換
  toDTO(): MenuDTO {
    return {
      id: this._id,
      name: this._name.value,
      price: this._price.value,
    };
  }
}

// 型定義
export type MenuCreateProps = {
  id: number;
  name: string;
  price: number;
};

export type MenuDTO = {
  id: number;
  name: string;
  price: number;
};
