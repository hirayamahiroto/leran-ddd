import { Menu } from "../../entity";

export interface IMenuRepository {
  create(menu: Menu): Promise<void>;
}
