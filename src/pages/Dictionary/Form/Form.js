import React from 'react';

const Form = props => (
  <form onSubmit={props.createDictItem}>
    <input type="text" name="domain" placeholder="Domain" required />
    <input type="text" name="range" placeholder="Range" required />
    <button type="submit">Create</button>
  </form>
);
export default Form;
