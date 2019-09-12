import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actionTypes from '../../store/actions/index';

import ItemList from './ItemList/ItemList';

const Dictionary = props => {
  const { match, selectedDictionary, selectDictionary } = props;

  useEffect(() => {
    console.log(match.params.id)
    selectDictionary(parseFloat(match.params.id))
  }, []);

  if (selectedDictionary) {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <div>{selectedDictionary.name}</div>
        <ItemList list={selectedDictionary.items}/>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);