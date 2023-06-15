import { eItemType } from './eItemType';

export interface iItem {
  id: number;
  name: string;
  boatId: number;
  itemTypeId: eItemType;
  weight: number;
  qty: number;
  notes?: string;
  uses?: number;
}
