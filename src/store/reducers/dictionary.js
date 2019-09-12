import * as actionTypes from '../actions/actionTypes';

// Dictionary Reducers
import createDictionary from './DictionaryReducers/createDictionary';
import deleteDictionary from './DictionaryReducers/deleteDictionary';
import editDictionary from './DictionaryReducers/editDictionary';
import selectedDictionary from './DictionaryReducers/selectedDictionary';

// Items Reducers
import createItem from './ItemReducers/createItem';

const initialState = {
  dictionaryList: [],
  selectedDictionary: null,
}

const dictionary = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATING_DICTIONARY: return createDictionary(state, action);
    case actionTypes.DELETING_DICTIONARY: return deleteDictionary(state, action);
    case actionTypes.EDITING_DICTIONARY: return editDictionary(state, action);
    case actionTypes.SELECTED_DICTIONARY: return selectedDictionary(state, action);
    case actionTypes.CREATE_ITEM: return createItem(state, action);
    default: return state;
  };
};

export default dictionary;