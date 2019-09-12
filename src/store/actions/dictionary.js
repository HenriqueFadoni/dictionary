import * as actions from './actionTypes';

export const createDictionary = name => ({
  type: actions.CREATING_DICTIONARY,
  id: Math.round(Math.random() * 10000),
  name,
});

export const deleteDictionary = id => ({
  type: actions.DELETING_DICTIONARY,
  id,
});

export const editDictionary = (id, newName) => ({
  type: actions.EDITING_DICTIONARY,
  id,
  newName
});

export const selectDictionary = id => ({
  type: actions.SELECTED_DICTIONARY,
  id,
});

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