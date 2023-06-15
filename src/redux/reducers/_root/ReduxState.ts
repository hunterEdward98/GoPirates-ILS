import { iItem } from '../item/iItem';
import { iShip, iShipReducer } from '../ship/iShip';

export type ReduxState = {
  ships: iShipReducer;
  items: iItem[];
};
