function merge_sort (arr) {
  if (arr.length < 2) return arr;

  const merge = (arr1, arr2) => {
    let newArr = [];

    for(let i = 0, j = 0; arr1.length > i || arr2.length > j;) {
      if (arr1[i] === undefined) newArr.push(arr2[j++]);
      else if (arr2[j] === undefined) newArr.push(arr1[i++]);
      else if (arr1[i] < arr2[j]) newArr.push(arr1[i++]);
      else newArr.push(arr2[j++]);
    }
    return newArr;
  }

  const midPoint = Math.floor(arr.length/2),
    left = arr.slice(0, midPoint),
    right = arr.slice(midPoint);

  return merge(merge_sort(left), merge_sort(right));
}


















console.log(merge_sort([13, 2, 1, 23, 5, 432, 2554, 453]))
