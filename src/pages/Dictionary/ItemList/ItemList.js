import React from 'react';

import Item from './Item/Item';

const ItemList = props => {
  const entireList = props.list.map(item => {
    return <Item />
  })
  return (
    <div>
      {entireList}
    </div>
  );
}

export default ItemList;