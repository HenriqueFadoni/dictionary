import React from 'react';

const Form = props => (
  <form onSubmit={props.editSave}>
    <div>
      <input type="text" name="editName" />
    </div>
    <div>
      <button type="submit">
        Save
      </button>
      <button type="button" onClick={props.editingToggle}>
        Cancel
      </button>
    </div>
  </form>
);

export default Form;