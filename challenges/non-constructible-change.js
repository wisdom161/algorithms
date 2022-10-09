// Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the min sum of money) that you cannot create. The given coins can have any positive integer value and aren'te necessarily unique (ie you can have multiple coins of the same value)

const nonConstructibleChange = coins => {
    // coins.sort((a,b) => a-b);
    quickSort(coins);

    let sum = 0;

    for(let i = 0; i < coins.length; i++) {
        if (coins[i] > sum + 1) return sum += 1

        sum += coins[i]
    }
    return sum += 1
}

const quickSort = (arr, left = 0, right = arr.length -1) => {
    if (arr.length < 2) return arr;

    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
    }

    const partition = (arr, left, right) => {
        const pivot = arr[Math.floor((left + right)/2)];
        let i = left,
            j = right;
        
            while (i <= j) {
                while (arr[i] < pivot) i++;

                while (arr[j] > pivot) j--;

                if (i <= j) {
                    swap(arr, i, j);
                    i++;
                    j--;
                }
            }
            return i;
    }

    const index = partition(arr, left, right);
    if (left < index-1) quickSort(arr, left, index-1)
    if (right > index) quickSort(arr, index, right)
    return arr;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])) // 20
console.log(quickSort([5,3,2,4,1]))