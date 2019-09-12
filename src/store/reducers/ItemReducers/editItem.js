const checkValidity = (items, newItem) => {
  let error = null;

  items.forEach(item => {
    if ((item.domain === newItem.domain) && (item.range === newItem.range)) {
      error = 'duplicants';
    } else if ((item.domain === newItem.domain) && (item.range !== newItem.range)) {
      error = 'forks';
    } else if ((item.range === newItem.domain) && (item.domain === newItem.range)) {
      error = 'cycles';
    } else if ((item.range === newItem.domain) && (item.domain !== newItem.range)) {
      error = 'chains';
    }
  });

  return error;
}

const editItem = (state, action) => {
  const error = checkValidity(itemsList, newItem);

  const updatedItemList = state.selectedDictionary.items.map(item => {
    if (item.id === action.id) {
      if (error) {
        return {
          ...item,
          domain: action.newDomain,
          range: action.newRange,
          error
        }
      } else {
        return {
          ...item,
          domain: action.newDomain,
          range: action.newRange,
          error: null
        }
      }
    } else {
      return item
    }
  });

  const newSelectedDictionary = {
    ...state.selectedDictionary,
    item: updatedItemList
  }

  return {
    ...state,
    dictionaryList: [
      ...state.dictionaryList,
      newSelectedDictionary
    ],
    selectedDictionary: newSelectedDictionary
  };
};

export default editItem;