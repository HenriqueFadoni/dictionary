import React, { useState } from 'react';

import CreateDicForm from './components/CreateDicForm';
import DictionaryList from './components/DictionaryList';

const App = () => {
  const [dictionaries, setDictionaries] = useState([]);

  const createDictionary = event => {
    event.preventDefault()

    const name = event.target.dictionaryName.value;
    if (name.trim() !== '') {
      setDictionaries([
        ...dictionaries,
        { 
          name,
          items: []
        }
      ]);
    }
  }

  const deleteDictionary = id => {
    const newDictionaries = dictionaries.filter((dictionary, index) => index !== id);
    setDictionaries(newDictionaries);
  }

  return (
    <div className="App">
      <CreateDicForm createDictionary={createDictionary} />
      <DictionaryList 
        dictionaries={dictionaries}
        deleteDictionary={deleteDictionary}
      />
    </div>
  );
}

export default App;
