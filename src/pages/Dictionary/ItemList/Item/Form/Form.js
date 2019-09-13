import React from 'react';

const Form = props => (
  <form 
    className="dictionary__item--form" 
    onSubmit={props.editSave}
  >
    <input 
      type="text" 
      name="editDomain" 
      placeholder="Domain" 
      required 
    />
    <input 
      type="text" 
      name="editRange" 
      placeholder="Range"
      required 
    />
    <button 
      type="submit" 
      className="small-button-square"
    >
      Save
    </button>
    <button 
      type="button" 
      onClick={props.editingToggle} 
      className="small-button-square"
    >
      Cancel
    </button>
  </form>
);

export default Form;