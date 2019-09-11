import React from 'react';

const Form = props => (
  <div>
    <form onSubmit={props.createDictionary}>
      <input type="text" name="dictionaryName" required />
      <button type="submit">Create Dictionary</button>
    </form>
  </div>
);

export default Form;