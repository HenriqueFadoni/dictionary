import * as actions from './actionTypes';

export const createItem = (domain, range) => ({
  type: actions.CREATE_ITEM,
  id: Math.round(Math.random() * 10000),
  domain,
  range
});

export const deleteItem = id => ({
  type: actions.DELETE_ITEM,
  id,
});

export const editItem = (id, newDomain, newRange) => ({
  type: actions.EDIT_ITEM,
  id,
  newDomain,
  newRange
});
