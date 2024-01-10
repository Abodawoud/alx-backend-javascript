export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string' || !(set instanceof Set)
  ) {
    return '';
  }

  const setIterator = set.values();
  const list = [];
  for (const element of setIterator) {
    if (element.startsWith(startString) && typeof element === 'string') {
      list.push(element.slice(startString.length));
    }
  }
  return list.join('-');
}
