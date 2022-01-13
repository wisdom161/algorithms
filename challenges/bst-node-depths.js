class BST {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const nodeDepths = (root, depth = 0) => {
    if (!root) return 0;
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}