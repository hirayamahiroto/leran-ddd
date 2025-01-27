import { IMenuRepository } from "../../../core/domain/menu/repositories/IMenuRepository";
import { Menu } from "../../../core/domain/menu/entity";

export class MenuRepository implements IMenuRepository {
  constructor() {}

  async create(menu: Menu): Promise<void> {
    console.log(menu);
  }
}
