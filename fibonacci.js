// ফিবোনাচ্ছি অনেকটা সামানতো ধারার অংকের মত ।
// fibbo[2]=fibbo[2-1]+fibbo[2-1];
// fibbo[3]=fibbo[3-1]+fibbo[3-1];
// fibbo[4]=fibbo[4-1]+fibbo[4-1];
// fibbo[5]=fibbo[5-1]+fibbo[5-1];
// fibbo[n]=fibbo[n-1]+fibbo[n-1];
// fibbo[i]=fibbo[i-1]+fibbo[i-1];
function fibonacci(n) {
  var fibbo = [0, 1];
  for (i = 2; i <= n; i++) {
    fibbo[i] = fibbo[i - 1] + fibbo[i - 2];
  }
  return fibbo;
}
var result = fibonacci(10);
console.log(result);
