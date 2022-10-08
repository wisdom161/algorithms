const findClosestValueInBst = (tree, target) => {
    return findClosestValueInBstHelper(tree, target, tree.value);
}



class BST {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const findClosestValueInBstHelper = (tree, target, closest) => {
    let currentNode = tree;

    while (currentNode) {
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value
        }

        if (target < currentNode.value) {
            currentNode = currentNode.left
        } else if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else {
            break;
        }
    }
    return closest;
}