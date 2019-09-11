import React from 'react';

import Dictionary from './Dictionary';

const DictionaryList = props => {
  const list = props.dictionaries.map((dictionary, index) => (
    <Dictionary key={index} name={dictionary.name} />
  ));

  return (
    <div>
      {list}
    </div>
  );
};

export default DictionaryList;