import { createSlice } from '@reduxjs/toolkit';
import { Action } from '../../actionTypes/_root.AT';
import { iShip, iShipReducer, iShipType } from './iShip';
import { eShipMaterial, eShipType } from './eShipType';
const initialStateShips: iShip[] = [
  {
    boatName: 'The Rusty Tankard',
    shipTypeId: eShipType.Sloop,
    id: 1,
    materialId: eShipMaterial.TowerCap,
    flag: 'Catalian',
  },
  {
    id: 2,
    boatName: 'Le Cul De Ta Mère',
    shipTypeId: eShipType.Sloop,
    materialId: eShipMaterial.Wood,
    flag: 'Catalian',
  },
];
const initialStateShipTypes: iShipType[] = [
  {
    id: eShipType.Sloop,
    weight: 100,
    capacity: 90,
    length: 61,
    width: 20,
    maneuverability: -2,
    mastHeight: 90,
    avgSpeed: 10,
    maxSpeed: 14,
    sailCount: 1,
    maxHP: 300,
  },
  {
    id: eShipType.Brigantine,
    weight: 500,
    capacity: 450,
    sailCount: 3,
    length: 150,
    width: 33,
    mastHeight: 150,
    avgSpeed: 7,
    maxSpeed: 10,
    maneuverability: -3,
    maxHP: 400,
  },
  {
    id: eShipType.Galleon,
    weight: 2000,
    capacity: 1800,
    width: 60,
    length: 200,
    avgSpeed: 6,
    maxSpeed: 8,
    maneuverability: -5,
    mastHeight: 200,
    sailCount: 5,
    maxHP: 500,
  },
];
const initialState: iShipReducer = {
  ships: initialStateShips,
  shipTypes: initialStateShipTypes,
};
const shipReducer = createSlice({
  initialState,
  name: 'ship',
  reducers: {
    setShips(state, action: Action<iShip[]>) {
      return { ...state, ships: [...(action.payload ?? [])] };
    },
    setShipTypes(state, action: Action<iShipType[]>) {
      return { ...state, shipTypes: [...(action.payload ?? [])] };
    },
  },
});
export const { setShips, setShipTypes } = shipReducer.actions;
export default shipReducer.reducer;
