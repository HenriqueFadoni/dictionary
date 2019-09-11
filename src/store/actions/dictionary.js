import * as actions from './actionTypes';

export const createDictionary = name => ({
  type: actions.CREATING_DICTIONARY,
  id: Math.round(Math.random() * 10000),
  name,
});

