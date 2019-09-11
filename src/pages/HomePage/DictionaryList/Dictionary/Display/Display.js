import React from 'react';
import { NavLink } from 'react-router-dom';

const Display = props => (
  <>
    <div>
      <NavLink to={`/dictionary/${props.id}`}>{props.name}</NavLink>
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