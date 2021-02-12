function Factorial(n) {
  var i = 1;
  var fact = 1;
  while (i <= n) {
    fact = fact * i;
    // console.log(i, factorial);
    i++;
  }
  return fact;
}
var fact10=Factorial(10);
console.log(fact10);