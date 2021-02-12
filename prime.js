function checkPrime(n) {
  for (i = 2; i < n; i++) {
    // console.log(i, n % i);
    if (n % i == 0) {
      return "It's not a prime number.";
    }
  }
  return "It's a prime number.";
}
let result=checkPrime(149);
console.log(result);