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
  const itemList = state.selectedDictionary.items;
  const newItemList = itemList.filter(d => d.id !== action.id)

  const newItem = { 
    domain: action.newDomain,
    range: action.newRange
  }

  const error = checkValidity(newItemList, newItem);

  const updatedItemList = itemList.map(item => {
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
    items: updatedItemList
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