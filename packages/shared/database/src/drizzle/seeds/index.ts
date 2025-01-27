import database from "../../../index";
import { customers, menuItems, orders, bills } from "../schema";

async function main() {
  try {
    // メニュー項目のシード
    const menuItemsData = await database
      .insert(menuItems)
      .values([
        { name: "ラーメン", price: "800" },
        { name: "餃子", price: "500" },
        { name: "チャーハン", price: "750" },
        { name: "ビール", price: "550" },
      ])
      .returning();

    // 顧客のシード
    const customersData = await database
      .insert(customers)
      .values([
        { visitTime: new Date(), partySize: 2 },
        { visitTime: new Date(), partySize: 4 },
        { visitTime: new Date(), partySize: 1 },
      ])
      .returning();

    // 注文のシード
    await database.insert(orders).values([
      {
        customerId: customersData[0].id,
        menuItemId: menuItemsData[0].id,
        orderTime: new Date(),
      },
      {
        customerId: customersData[0].id,
        menuItemId: menuItemsData[1].id,
        orderTime: new Date(),
      },
      {
        customerId: customersData[1].id,
        menuItemId: menuItemsData[2].id,
        orderTime: new Date(),
      },
    ]);

    // お会計のシード
    await database.insert(bills).values([
      {
        customerId: customersData[0].id,
        totalAmount: "1300", // ラーメン + 餃子
        paymentStatus: false,
        billingTime: new Date(),
      },
      {
        customerId: customersData[1].id,
        totalAmount: "750", // チャーハン
        paymentStatus: true,
        billingTime: new Date(),
      },
    ]);

    console.log("✅ シードデータの投入が完了しました");
  } catch (error) {
    console.error("❌ シードデータの投入に失敗しました:", error);
    process.exit(1);
  }
}

main();
