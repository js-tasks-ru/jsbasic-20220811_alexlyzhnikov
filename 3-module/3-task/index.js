function camelize(str) {
  return str
  .split('-')
  .map( (word, element) => element == 0 ? word : word[0].toUpperCase() + word.slice(1))
  .join('');
}
