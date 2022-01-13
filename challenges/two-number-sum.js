const twoNumberSum = (arr, targetSum) => {
  const nums = {};

  for(let i = 0; i < arr.length; i++) {
    const potentialMatch = targetSum - arr[i];

    if (nums[potentialMatch]) return [arr[i], potentialMatch]
    else nums[arr[i]] = true
  }
  return [];
}


console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

