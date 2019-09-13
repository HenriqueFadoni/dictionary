import checkValidity from './utilities/checkValidity';

const editItem = (state, action) => {
  const itemList = state.selectedDictionary.items;
  const newItemList = itemList.filter(d => d.id !== action.id);
  const newDictionaryList = state.dictionaryList.filter(d => state.selectedDictionary.id !== d.id);


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
      ...newDictionaryList,
      newSelectedDictionary
    ],
    selectedDictionary: newSelectedDictionary
  };
};

export default editItem;