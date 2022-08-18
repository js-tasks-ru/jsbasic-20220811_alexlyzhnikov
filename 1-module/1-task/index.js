function factorial(n) {
  let result = 1; // присваиваем переменной значение 1, т.к. оно не может быть равно 0
    for (let i = 1; i <= n; i++ ) {
        result = result * i;
      }
  return result;
}