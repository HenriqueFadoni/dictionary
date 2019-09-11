import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/index';
 
import Form from './Form/Form';
import DictionaryList from './DictionaryList/DictionaryList';

const HomePage = props => {
  const createNewDictionary = event => {
    event.preventDefault()
    const name = event.target.dictionaryName.value;

    if (name.trim() !== '') {
      props.createDictionary(name)
    }
  }

  return (
    <div>
      <Form createDictionary={createNewDictionary} />
      <DictionaryList
        dictionaries={props.dictionaryList}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  dictionaryList: state.dictionaryList
});

const mapDispatchToProps = dispatch => ({
  createDictionary: name => dispatch(actionTypes.createDictionary(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);