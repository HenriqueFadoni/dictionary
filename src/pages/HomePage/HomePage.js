import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/index';
 
import Form from './Form/Form';
import DictionaryList from './DictionaryList/DictionaryList';

const HomePage = props => {
  const [dictionaries, setDictionaries] = useState([]);

  const createDictionary = event => {
    event.preventDefault()

    const name = event.target.dictionaryName.value;
    if (name.trim() !== '') {
      props.createDictionary(name)
    }
  }

  const deleteDictionary = id => {
    const newDictionaries = dictionaries.filter((dictionary, index) => index !== id);
    setDictionaries(newDictionaries);
  }

  return (
    <div>
      <Form createDictionary={createDictionary} />
      <DictionaryList
        dictionaries={dictionaries}
        deleteDictionary={deleteDictionary}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  createDictionary: name => dispatch(actionTypes.createDictionary(name))
});

export default connect(null, mapDispatchToProps)(HomePage);