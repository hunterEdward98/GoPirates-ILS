import { eShipMaterial, eShipType } from './eShipType';

export interface iShip {
  id: number;
  shipTypeId: eShipType;
  materialId: eShipMaterial;
  boatName: string;
  flag: string;
}

export interface iShipType {
  id: eShipType;
  length: number;
  width: number;
  maneuverability: number;
  avgSpeed: number;
  maxSpeed: number;
  mastHeight: number;
  sailCount: number;
  capacity: number;
  weight: number;
  maxHP: number;
}
export interface iShipReducer {
  ships: iShip[];
  shipTypes: iShipType[];
}
