import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actionTypes from '../../store/actions/index';

import ItemList from './ItemList/ItemList';
import Form from './Form/Form';

const Dictionary = props => {
  const { match, selectedDictionary, selectDictionary, createItem } = props;

  useEffect(() => {
    selectDictionary(parseFloat(match.params.id))
  }, []);

  const createDictItem = event => {
    event.preventDefault();
    createItem(
      event.target.domain.value,
      event.target.range.value
    );
  }

  if (selectedDictionary) {
    return (
      <div className="dictionary__container">
        <div className="dictionary__header">
          <NavLink className="link-style" to="/">Home</NavLink>
        </div>
        <div className="dictionary__form">
          <div className="title">{selectedDictionary.name}</div>
          <Form createDictItem={createDictItem} />
        </div>
        <ItemList list={selectedDictionary.items} />
      </div>
    );
  } else {
    return null
  }
}

const mapStateToProps = state => ({
  selectedDictionary: state.selectedDictionary
});

const mapDispatchToProps = dispatch => ({
  selectDictionary: id => dispatch(actionTypes.selectDictionary(id)),
  createItem: (domain, range) => dispatch(actionTypes.createItem(domain, range))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);