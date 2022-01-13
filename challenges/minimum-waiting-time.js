const minimumWaitingTime = queries => {
    queries.sort((a, b) => a - b);
    let totalWaitingTime = 0;

    for(let i = 0; i < queries.length; i++) {
        let queriesLeft = queries.length - (i + 1);
        totalWaitingTime += queries[i] * (queriesLeft);
    }
    return totalWaitingTime;
}

console.log(minimumWaitingTime([17, 4, 3])); // 17