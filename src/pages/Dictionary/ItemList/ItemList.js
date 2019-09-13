import React from 'react';
import { connect } from 'react-redux';

import Item from './Item/Item';

const ItemList = props => {
  const entireList = props.list.map(item => {
    return (
      <Item 
        key={item.id}
        id={item.id}
        domain={item.domain} 
        range={item.range} 
        error={item.error}
      />
    )
  })
  return (
    <div className="dictionary__item-list">
      {entireList}
    </div>
  );
}

export default ItemList;