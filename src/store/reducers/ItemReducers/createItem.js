import checkValidity from './utilities/checkValidity';

const createItem = (state, action) => {
  const itemsList = state.selectedDictionary.items;
  const newItem = {
    id: action.id,
    domain: action.domain,
    range: action.range
  }

  const error = checkValidity(itemsList, newItem);

  let updateDictionary = null;
  
  if (error) {
    updateDictionary = {
      ...state.selectedDictionary,
      items: [
        ...itemsList,
        {
          ...newItem,
          error
        }
      ]
    }
  } else {
    updateDictionary = {
      ...state.selectedDictionary,
      items: [
        ...itemsList,
        newItem
      ]
    }
  }

  const newDicList = state.dictionaryList.map(dic => {
    if (dic.id === state.selectedDictionary.id) {
      return updateDictionary
    } else {
      return dic
    }
  });

  return {
    ...state,
    dictionaryList: newDicList,
    selectedDictionary: updateDictionary
  }
}

export default createItem;