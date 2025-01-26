import { MenuRepository } from "../../infra/repository/menu";
import { MenuCreateProps } from "../../domain/menu/entity";
import { Menu } from "../../domain/menu/entity";
import { MenuName } from "../../domain/menu/valueObjects/menuName";
import { MenuPrice } from "../../domain/menu/valueObjects/menuPrice";

class CreateMenuUseCase {
  constructor(private readonly menuRepository: MenuRepository) {}

  async execute(props: MenuCreateProps): Promise<Menu> {
    const name = MenuName.create(props.name.value);
    const price = MenuPrice.create(props.price.value);

    const createId = 1;

    const menu = Menu.create({
      id: createId,
      name: name,
      price: price,
    });

    await this.menuRepository.create(menu);

    return menu;
  }
}

export { CreateMenuUseCase };
