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
      />
    )
  })
  return (
    <div>
      <div>
        <div>Domain</div>
        <div>Range</div>
        <div>Actions</div>
      </div>
      {entireList}
    </div>
  );
}

export default ItemList;