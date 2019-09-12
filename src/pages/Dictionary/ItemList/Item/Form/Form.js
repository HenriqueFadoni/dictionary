import React from 'react';

const Form = props => (
  <form onSubmit={props.editSave}>
    <input 
      type="text" 
      name="editDomain" 
      placeholder="Domain" 
    />
    <input 
      type="text" 
      name="editRange" 
      placeholder="Range" 
    />
    <button type="submit">Save</button>
    <button type="button" onClick={props.editingToggle}>Cancel</button>
  </form>
);

export default Form;