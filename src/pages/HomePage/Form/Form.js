import React from 'react';
import propTypes from 'prop-types';

const Form = props => (
  <div className="homepage__form--container">
    <form onSubmit={props.createDictionary}>
      <input 
        type="text" 
        name="dictionaryName" 
        placeholder="Add a Dictionary"
        className="input-square" 
        required 
      />
      <button className="button-square" type="submit">Create Dictionary</button>
    </form>
  </div>
);

export default Form;

Form.proptype = {
  createDictionary: propTypes.func.isRequired
}
