module.exports = function check(str, bracketsConfig) {
  let stack;
  while (str != 0) {
    for (elements of bracketsConfig) {
      str = str.replace(elements.join(''), '')
    }
    if (str === stack) {
      return false;
    }
    stack = str;
  }
  return str.length === 0;
    }
  

