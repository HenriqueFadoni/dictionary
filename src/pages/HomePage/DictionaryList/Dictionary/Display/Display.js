import React from 'react';

const Display = props => (
  <>
    <div>
      <h1>{props.name}</h1>
    </div>
    <div>
      <button type="button" onClick={props.editingToggle}>
        Edit
      </button>
      <button
        type="button"
        onClick={() => props.deleteDictionary(props.id)}
      >
        Delete
      </button>
    </div>
  </>
);

export default Display;