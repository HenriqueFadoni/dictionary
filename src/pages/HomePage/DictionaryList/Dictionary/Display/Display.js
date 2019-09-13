import React from 'react';
import { NavLink } from 'react-router-dom';

const Display = props => (
  <>
    <div>
      <NavLink
        className="link-style"
        to={`/dictionary/${props.id}`}
      >
        {props.name}
      </NavLink>
    </div>
    <div>
      <button
        type="button"
        className="small-button-square"
        onClick={props.editingToggle}
      >
        Edit
      </button>
      <button
        type="button"
        className="small-button-square"
        onClick={() => props.deleteDictionary(props.id)}
      >
        Delete
      </button>
    </div>
  </>
);

export default Display;