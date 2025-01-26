import { IMenuRepository } from "../../../domain/menu/repositories/IMenuRepository";
import { Menu } from "../../../domain/menu/entity";

export class MenuRepository implements IMenuRepository {
  constructor() {}

  async create(menu: Menu): Promise<void> {
    console.log(menu);
  }
}
