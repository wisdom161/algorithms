const quickSort = (arr, left = 0, right = arr.length-1) => {
    if (arr.length < 2) return arr;

    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const partition = (arr, left, right) => {
        const pivot = arr[Math.floor((left + right)/2)];

            while (left <= right) {
                while (arr[left] < pivot) left++;
                while (arr[right] > pivot) right--;
                if (left <= right) {
                    swap(arr, left, right);
                    left++;
                    right--
                }
            }
        return left;
    }
    
    const index = partition(arr, left, right);

    if (left < index-1) quickSort(arr, left, index-1);

    if (right > index) quickSort(arr, index, right);

    return arr;
}


console.log(quickSort([4,1,2,7,6,3,8,5]))