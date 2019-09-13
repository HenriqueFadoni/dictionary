import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions/index';

import Form from './Form/Form';

const Item = props => {
  const [isEditing, setIsEditing] = useState(false);

  const editingToggle = () => setIsEditing(!isEditing);

  const editSave = event => {
    event.preventDefault();
    props.editItem(
      props.id,
      event.target.editDomain.value,
      event.target.editRange.value
    );
    editingToggle();
  }

  if (isEditing) {
    return <Form editSave={editSave} editingToggle={editingToggle} />
  } else {
    return (
      <div className={props.error ? "dictionary__item--error" : "dictionary__item"}>
        <div className="title">
          {props.domain}
        </div>
        <div className="title">
          {props.range}
        </div>
        <div>
          <button 
            className="small-button-square" 
            onClick={editingToggle}
          >
            Edit
          </button>
          <button 
            className="small-button-square"
            onClick={() => props.deleteItem(props.id)}
          >
            Delete
          </button>
        </div>
        {
          props.error ? <div className="title">{props.error}</div> : null
        }
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(actionTypes.deleteItem(id)),
  editItem: (id, domain, range) => dispatch(actionTypes.editItem(id, domain, range))
});

export default connect(mapDispatchToProps)(Item);