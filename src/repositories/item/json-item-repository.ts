import { resolve } from "path";
import { ItemRepository } from "./item-repository";
import { ItemModel } from "../../app/models/Item/ItemModel";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd(); //pega ate a pasta pai mais alta
const path = resolve(ROOT_DIR, "src", "app", "db", "seed", "items.json");

export class JsonItemRepository implements ItemRepository {
  private async simulateWait() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  private async readFromDisk() {
    const jsonContent = await readFile(path, "utf-8");
    const parseJson = JSON.parse(jsonContent);
    const { items } = parseJson;
    return items;
  }
  async findAll(): Promise<ItemModel[]> {
    await this.simulateWait();
    const items = await this.readFromDisk();
    return items;
  }
  async findById(id: number): Promise<ItemModel> {
    const items = await this.findAll();
    const item = items.find((item) => item.id === id);
    if (!item) throw new Error("Item not found");
    return item;
  }
}

export const itemRepository: ItemRepository = new JsonItemRepository();

(async () => {
  const item = await itemRepository.findById(1);
  console.log(item);
})();
// testar arquivo npx tsx src/repositories/item/json-item-repository.ts
