import React from 'react';

const Dictionary = props => (
  <div>
    <div>
      <h1>{props.name}</h1>
    </div>
    <div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
)

export default Dictionary;