function cleanSet(set, startString) {
  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => {
      if (startString === '') {
        return value;
      }
      return value.slice(startString.length);
    })
    .join('-');
}

export default cleanSet;
