import React from 'react';

const Form = props => (
  <form onSubmit={props.createDictItem}>
    <input type="text" className="edit-input margin-right-3" name="domain" placeholder="Domain" required />
    <input type="text" className="edit-input margin-right-3" name="range" placeholder="Range" required />
    <button type="submit" className="small-button-square">Create</button>
  </form>
);
export default Form;
