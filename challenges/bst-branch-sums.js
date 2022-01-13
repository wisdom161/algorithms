class BinaryTree {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const branchSums = root => {
    const sums = [];
    calculateBranchSums(root, 0, sums)
    return sums;
}

const calculateBranchSums = (node, runningSum, sums) => {
    if (!node) return;

    const newRunningSum = runningSum + node.value;
    // we are at a leaf node
    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }

    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums)
}

/*
Time = O(n)
Space = O(n)
We know that we are going to be bounded by O of N because we're not going to exceed N branch sums. It wouldn't make sense
*/