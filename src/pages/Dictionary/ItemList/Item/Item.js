import React from 'react';

const Item = props => (
  <div>
    <div>
      {props.domain}
    </div>
    <div>
      {props.range}
    </div>
    <div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
);

export default Item;