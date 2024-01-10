export default function cleanSet(set, startString) {
  const setIterator = set.values();
  const list = [];

  for (const element of setIterator) {
    if (element.startsWith(startString) && startString !== '') {
      list.push(element.slice(startString.length));
    }
  }
  return list.join('-');
}
