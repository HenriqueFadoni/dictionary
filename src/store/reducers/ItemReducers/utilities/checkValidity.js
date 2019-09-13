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

export default checkValidity;