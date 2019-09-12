import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions/index';

const Item = props => (
  <div>
    <div>
      {props.domain}
    </div>
    <div>
      {props.range}
    </div>
    <div>
      <button>Edit</button>
      <button onClick={() => props.deleteItem(props.id)}>Delete</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(actionTypes.deleteItem(id)),
  editItem: (id, domain, range) => dispatch(actionTypes.editItem(id, domain, range))
});

export default connect(null, mapDispatchToProps)(Item);