import { CreateMenuUseCase } from "../../../../core/useCase/createMenu";
import { MenuRepository } from "../../../../infra/repository/menu";
export async function POST(req: Request) {
  try {
    const { name, price } = await req.json();

    const createMenuUseCase = new CreateMenuUseCase(new MenuRepository());
    await createMenuUseCase.execute({
      id: 1,
      name: name,
      price: price,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "メニューが正常に作成されました",
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("メニュー作成エラー:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "メニューの作成に失敗しました",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
