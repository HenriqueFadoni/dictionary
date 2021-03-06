import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions/index';
import propTypes from 'prop-types';

import Form from './Form/Form';
import Display from './Display/Display';

const Dictionary = props => {
  const [isEditing, setIsEditing] = useState(false);
  const { id, name, editDictionary, deleteDictionary } = props

  // Handling Edit Mode
  const editingToggle = () => setIsEditing(!isEditing);

  const editSave = event => {
    event.preventDefault()
    const newName = event.target.editName.value;

    if (newName.trim() !== '') {
      editDictionary(id, newName);
      editingToggle();
    }
  }

  // Handling What to show to the User
  return (
    <div className="homepage__list--item">
      {
        isEditing
          ?
          <Form
            editSave={editSave}
            editingToggle={editingToggle}
          />
          :
          <Display
            id={id}
            name={name}
            editingToggle={editingToggle}
            deleteDictionary={deleteDictionary}
          />
      }
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  editDictionary: (id, newName) => dispatch(actionTypes.editDictionary(id, newName)),
  deleteDictionary: id => dispatch(actionTypes.deleteDictionary(id))
});

export default connect(null, mapDispatchToProps)(Dictionary);

Dictionary.proptype = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  editDictionary: propTypes.func.isRequired,
  deleteDictionary: propTypes.func.isRequired
}
