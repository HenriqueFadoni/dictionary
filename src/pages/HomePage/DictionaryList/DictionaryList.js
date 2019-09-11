import React from 'react';

import Dictionary from './Dictionary/Dictionary';

const DictionaryList = props => {
  const { dictionaries, deleteDictionary } = props;

  const list = dictionaries.map((dictionary, index) => (
    <Dictionary
      key={index}
      id={index}
      name={dictionary.name}
      deleteDictionary={deleteDictionary}
    />
  ));

  return (
    <div>
      {list}
    </div>
  );
};

export default DictionaryList;