import React from 'react';

const Form = props => (
  <div className="homepage__form--container">
    <form onSubmit={props.createDictionary}>
      <input 
        className="input-square" 
        type="text" 
        name="dictionaryName" 
        placeholder="Add a Dictionary"
        required 
      />
      <button className="button-square" type="submit">Create Dictionary</button>
    </form>
  </div>
);

export default Form;