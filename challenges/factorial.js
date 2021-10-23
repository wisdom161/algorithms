// write a factorial function >> 5! = 5*4*3*2*1 = 120

function factorial(n) {
  let f = Array(n);

  if (n === 0 || n === 1) return 1;

  f[n] = factorial(n-1) * n;

  return f[n];
}

console.log(factorial(5))

// factorial(5) >> f[5] = factorial(4) * 5
// factorial(4) >> f[4] = factorial