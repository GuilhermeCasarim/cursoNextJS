import { ItemModel } from "@/app/models/Item/ItemModel";

export interface ItemRepository {
  findAll(): Promise<ItemModel[]>;
  findById(id: number): Promise<ItemModel>;
}