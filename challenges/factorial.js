// // write a factorial function >> 5! = 5*4*3*2*1 = 120

// function factorial(n) {
//   let f = Array(n);

//   if (n === 0 || n === 1) return 1;

//   f[n] = factorial(n-1) * n;

//   return f[n];
// }

// console.log(factorial(5))

// // factorial(5) >> f[5] = factorial(4) * 5
// // factorial(4) >> f[4] = factorial(3) * 4
// // factorial(3) >> f[3] = factorial(2) * 3
// // factorial(2) >> f[2] = factorial(1) * 2
// // factorial(2) >> f[2] = 1 * 2 >> 2
// // factorial(3) >> f[3] = 2 * 3 >> 6
// // factorial(4) >> f[4] = 6 * 4 >> 24
// // factorial(5) >> f[5] = 24 * 5 >> 120

// const factorial = (n) => {

//   // permutations often use factorial logic
//   // eg.) The number of ways of seating 6 students in a row of 6 chairs is:

//   if (n === 0 || n === 1) return 1
  
//   return n * factorial(n - 1)
// }

// console.log(factorial(5))
// // factorial(5) >> 5 * factorial(4)
// // factorial(4) >> 4 * factorial(3)
// // factorial(3) >> 3 * factorial(2)
// // factorial(2) >> 2 * factorial(1)
// // factorial(1) >> 1 * 1
// // factorial(1) >> 1
// // factorial(2) >> 2 * 1 >> 2
// // factorial(3) >> 3 * 2 >> 6
// // factorial(4) >> 4 * 6 >> 24
// // factorial(5) >> 5 * 24 >> 120


const factorial = n => {
    if (n === 0 || n === 1) return 1;

    let f = new Array(n);

    f[n] = factorial(n-1) * n

    return f[n]
}

  
  console.log(factorial(5))