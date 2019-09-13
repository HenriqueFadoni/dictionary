import React from 'react';

const Form = props => (
  <form className="homepage__list--item" onSubmit={props.editSave}>
    <div>
      <input 
        type="text" 
        name="editName" 
        className="edit-input" 
      />
    </div>
    <div>
      <button
        type="submit"
        className="small-button-square"
      >
        Save
      </button>
      <button 
        type="button" 
        className="small-button-square"
        onClick={props.editingToggle}
      >
        Cancel
      </button>
    </div>
  </form>
);

export default Form;