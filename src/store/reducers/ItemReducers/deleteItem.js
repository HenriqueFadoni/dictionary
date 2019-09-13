const deleteItem = (state, action) => {
  const itemList = state.selectedDictionary.items;
  const newItemList = itemList.filter(item => item.id !== action.id);

  const updatedDictionary = {
    ...state.selectedDictionary,
    items: newItemList
  }

  const newDictionaryList = state.dictionaryList.filter(d => state.selectedDictionary.id !== d.id);
  
  return {
    ...state,
    dictionaryList: [
      ...newDictionaryList,
      updatedDictionary
    ],
    selectedDictionary: updatedDictionary
  };
};

export default deleteItem;