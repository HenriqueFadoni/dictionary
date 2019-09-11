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

  return (
    <div className="App">
      <CreateDicForm createDictionary={createDictionary} />
      <DictionaryList dictionaries={dictionaries}/>
    </div>
  );
}

export default App;
