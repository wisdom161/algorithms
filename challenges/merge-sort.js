const merge_sort = arr => {
    if (arr.length < 2) return arr;

    const merge = (arr1, arr2) => {
        let newArr = [];

        for (let i = 0, j = 0; i < arr1.length|| j < arr2.length;) {
            if (arr1[i] === undefined) newArr.push(arr2[j++])
            else if (arr2[j] === undefined) newArr.push(arr1[i++])
            else if (arr1[i] < arr2[j]) newArr.push(arr1[i++])
            else newArr.push(arr2[j++])
        }
        return newArr;
    }

    const midPoint = Math.floor(arr.length/2),
        arr1 = arr.slice(0, midPoint),
        arr2 = arr.slice(midPoint);
    
    return merge(merge_sort(arr1), merge_sort(arr2))
}


console.log(merge_sort([13, 2, 1, 23, 5, 432, 2554, 453]))

/* 1 2 5 13 23 432 453 2554
            23
    2               432
 1     13       5       453
                                2554 */












                                
// function merge_sort (arr) {
//   if (arr.length < 2) return arr;

//   const merge = (arr1, arr2) => {
//     let newArr = [];

//     for(let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
//       if (arr1[i] === undefined) newArr.push(arr2[j++]);
//       else if (arr2[j] === undefined) newArr.push(arr1[i++]);
//       else if (arr1[i] < arr2[j]) newArr.push(arr1[i++]);
//       else newArr.push(arr2[j++]);
//     }
//     return newArr;
//   }

//   const midPoint = Math.floor(arr.length/2),
//     left = arr.slice(0, midPoint),
//     right = arr.slice(midPoint);

//   return merge(merge_sort(left), merge_sort(right));
// }
