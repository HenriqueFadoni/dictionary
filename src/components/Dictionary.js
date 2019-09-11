import React from 'react';

const Dictionary = props => (
  <div id={props.id}>
    <div>
      <h1>{props.name}</h1>
    </div>
    <div>
      <button type="button">Edit</button>
      <button
        type="button"
        onClick={() => props.deleteDictionary(props.id)}
      >
        Delete
      </button>
    </div>
  </div>
);

export default Dictionary;