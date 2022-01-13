function sortedSquaredArray(array) {
    // Write your code here.
    // it's given in ascending order, so we know the last element will always be the largest, 
    // we'll want to compare against the last element when creating our new sorted array backwards
    // we want to create it backwards because we want to start with the largest element and fill the array out in that order
    let sortedSquares = new Array(array.length).fill(0);
        start = 0,
        end = array.length-1;
    
    for (let i = array.length-1; i >= 0; i--) {

            if (Math.abs(array[start]) > Math.abs(array[end])) {
                sortedSquares[i] = Math.pow(array[start], 2);
                start++;
            } else {
                sortedSquares[i] = Math.pow(array[end], 2);
                end--;
            }
    }
    return sortedSquares;
}

  console.log(sortedSquaredArray([-7, -5, 3, 8, 9]))