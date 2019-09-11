import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actionTypes from '../../store/actions/index';

const Dictionary = props => {
  return (
    <div>
      {props.match.params.id}
      <NavLink to="/">Home</NavLink>
    </div>
  );
}

const mapStateToProps = state => ({
  dictionaryList: state.dictionaryList
});

const mapDispatchToProps = dispatch => ({
  createDictionary: name => dispatch(actionTypes.createDictionary(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);