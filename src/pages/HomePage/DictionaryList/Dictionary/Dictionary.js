import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions/index';

import Form from './Form/Form';
import Display from './Display/Display';

const Dictionary = props => {
  const [isEditing, setIsEditing] = useState(false);
  const { id, name, editDictionary, deleteDictionary } = props
  let render = null;

  // Handling Edit Mode
  const editingToggle = () => setIsEditing(!isEditing);

  const editSave = event => {
    event.preventDefault()
    const newName = event.target.editName.value;

    if (newName.trim() !== '') {
      editDictionary(id, newName);
    }
  }

  // Handling What to show to the User
  if (isEditing) {
    render = (
      <Form
        editSave={editSave}
        editingToggle={editingToggle}
      />
    )
  } else {
    render = (
      <Display
        id={id}
        name={name}
        editingToggle={editingToggle}
        deleteDictionary={deleteDictionary}
      />
    )
  }

  return (
    <div>
      {render}
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  editDictionary: (id, newName) => dispatch(actionTypes.editDictionary(id, newName)),
  deleteDictionary: id => dispatch(actionTypes.deleteDictionary(id))
});

export default connect(null, mapDispatchToProps)(Dictionary);