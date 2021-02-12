function Factorial(num) {
  let factorial = 1;
  for (let i = 1; i <=num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
let result= Factorial(3);
console.log(result);