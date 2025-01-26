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
    return new Menu(props.id, props.name, props.price);
  }
}

// 型定義
export type MenuCreateProps = {
  id: number;
  name: MenuName;
  price: MenuPrice;
};
