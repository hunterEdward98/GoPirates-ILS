import './App.css';
import { GenericTable } from '../components/GenericDropdown';
import { useSelector } from 'react-redux';
import { ReduxState } from '../redux/reducers/_root/ReduxState';
import { iShip } from '../redux/reducers/ship/iShip';
import { useState } from 'react';
import { iItem } from '../redux/reducers/item/iItem';
import { eItemType } from '../redux/reducers/item/eItemType';

interface iShipTableItem extends iShip {
  material: string;
  type: string;
}
interface iItemTableItem extends iItem {
  itemType: string;
}
function App() {
  const ships = useSelector((state: ReduxState) =>
    state.ships.ships.map((ship) => {
      return {
        ...state.ships.shipTypes.find(
          (shipType) => shipType.id === ship.shipTypeId
        ),
        ...ship,
      };
    })
  );
  const items: iItemTableItem[] = useSelector((state: ReduxState) =>
    state.items.map((x: iItem) => {
      return { ...x, itemType: eItemType[x.itemTypeId] };
    })
  );

  const [selectedItem, setSelectedItem] = useState<
    iShipTableItem | undefined
  >();
  return (
    <div className="App App-header">
      Ship Catalog
      <GenericTable
        data={ships}
        fields={[
          'boatName',
          'avgSpeed',
          'maxSpeed',
          'maneuverability',
          'weight',
          'capacity',
          'length',
          'width',
          'flag',
          'mastHeight',
          'maxHP',
          'sailCount',
        ]}
        headers={[
          'Boat Name',
          'Speed (ft/s)',
          'Max Speed (ft/s)',
          'Maneuverability',
          'Weight (tons)',
          'Capacity (tons)',
          'Length (ft)',
          'Width (ft)',
          'Flag',
          'Mast Height (ft)',
          'Max Hitpoints',
          'Sail Count',
        ]}
        rowClick={(arg0: any) => {
          console.log(arg0);
          setSelectedItem(arg0);
        }}
      />
      <hr style={{ width: '100%', margin: '20px' }} />
      {selectedItem !== undefined ? (
        <>
          {selectedItem.boatName}&apos;s Items
          <GenericTable
            data={items.filter((x) => {
              console.log(x, selectedItem);
              return x.boatId === selectedItem?.id;
            })}
            fields={['name', 'notes', 'itemType', 'qty', 'weight', 'uses']}
            headers={[
              'Item Name',
              'Notes',
              'Type',
              'Qty',
              'Weight',
              'Uses Remaining',
            ]}
            rowClick={(arg0: iItemTableItem) => {}}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
