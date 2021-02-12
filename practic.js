function checkPrimeN(n) {
  for (i = 2; i < n; i++) {
      if(n%i==0){
          return "It's not a prime number";
      }
  }
  return "It's Definitly a prime number";
}
var result=checkPrimeN(57);
console.log(result);