export const getDescendantProp = (obj, desc) => {
  const arr = desc.split('.');
  while (arr.length && (obj = obj[arr.shift()])) {}
  return obj;
}

export const sortFn = (a, b) => {
  if (!a) {
    return 1;
  }
  if (!b) {
    return -1;
  }
  if(typeof a === 'string' || typeof b === 'string'){
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }
  return a - b;
};