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
  }

  if (isEditing) {
    return <Form editSave={editSave} editingToggle={editingToggle} />
  } else {
    return (
      <div>
        <div>
          {props.domain}
        </div>
        <div>
          {props.range}
        </div>
        <div>
          <button onClick={editingToggle}>Edit</button>
          <button onClick={() => props.deleteItem(props.id)}>Delete</button>
        </div>
      </div>
    );
  }

};

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(actionTypes.deleteItem(id)),
  editItem: (id, domain, range) => dispatch(actionTypes.editItem(id, domain, range))
});

export default connect(null, mapDispatchToProps)(Item);