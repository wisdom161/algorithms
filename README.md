# Notes

## Microsoft Sorts 
Before 2010, these were the predominant sorting algorithms
- Insertion sort
- Bubble sort

Now:
- Quick sort (linear, small input sizes)
- Merge sort (good for bigger sizes, logarithmic)

- Array.sort (quick sort for input sizes less than 50, and merge sort)

## Recursion
A recursive function calls itself with a smaller input set repetitively doing some simple task until the task is so simple, it hits a base case
At any node in a recursive tree, the node receives 2 things from its parent: 
1. a partial solution 
2. a smaller subset of the problem that is left

```
const factorial = (n) => {

    // permutations often use factorial logic
    // eg.) The number of ways of seating 6 students in a row of 6 chairs is:
  
    if (n === 0) return 1
    
    return n * factorial(n - 1)
}
```

- Permutations are for lists (order matters) and combinations are for groups (order doesn't matter). A "combination lock" should really be called a "permutation lock".