const validSubSequence = (arr, seq) => {
    let arrIndex = 0,
        seqIndex = 0;

        while (arrIndex < arr.length && seqIndex < seq.length) {
            if (seq[seqIndex] === arr[arrIndex]) seqIndex++;
            arrIndex++;
        }
        return seqIndex === seq.length;
}

console.log(validSubSequence([1, 2, -5, 4, 7, 10],[1, 7, 8]))