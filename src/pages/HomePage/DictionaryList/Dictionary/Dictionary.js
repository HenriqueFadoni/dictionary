import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions/index';

const Dictionary = props => (
  <div id={props.id}>
    <div>
      <h1>{props.name}</h1>
    </div>
    <div>
      <button type="button">Edit</button>
      <button
        type="button"
        onClick={() => props.deleteDictionary(props.id)}
      >
        Delete
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  deleteDictionary: id => dispatch(actionTypes.deleteDictionary(id)),
});

export default connect(null, mapDispatchToProps)(Dictionary);