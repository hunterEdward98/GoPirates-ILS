import { createSlice } from '@reduxjs/toolkit';
import { iItem } from './iItem';
import { Action } from '../../actionTypes/_root.AT';
import { eItemType } from './eItemType';
const initialState: iItem[] = [
  {
    id: 1,
    boatId: 1,
    name: 'Cannon ball',
    itemTypeId: eItemType.Ammunition,
    weight: 15,
    qty: 35,
    uses: 1,
  },
  {
    id: 2,
    boatId: 2,
    name: 'Giant Tuna',
    notes: 'expires on June 12th',
    itemTypeId: eItemType.Exhaustible,
    weight: 500,
    qty: 1,
    uses: 7,
  },
];
const itemReducer = createSlice({
  initialState,
  name: 'item',
  reducers: {
    setItems(state, action: Action<iItem[]>) {
      return [...(action.payload ?? [])];
    },
  },
});
export const { setItems } = itemReducer.actions;
export default itemReducer.reducer;
