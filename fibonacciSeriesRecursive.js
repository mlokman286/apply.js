//[0, 1,1,2,3,5,8,13,21,34......];
function fibonacci(n) {
  if (n == 0) {
    return [0];
  }
  if (n == 1) {
    return [0, 1];
  } else {
    //Calculate Arry with nth element;
    var fibo = fibonacci(n - 1);
    var nextElement = fibo[n - 1] + fibo[n - 2];
    fibo.push(nextElement);
    return fibo;
  }
}
var resutl = fibonacci(15);
console.log(resutl)
