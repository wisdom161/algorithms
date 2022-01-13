const sumRootToLeaf = root => {
    // variable called sum of type int
    let sum = 0;
    // store root2leaf values where values are strings
    const dfs = (tree, root2leaf = "") => {
        if (!tree) return null;
        root2leaf += tree.val;
        if (!tree.left && !tree.right) sum += parseInt(root2leaf, 2);
        dfs(tree.left, root2leaf);
        dfs(tree.right, root2leaf);
    }
    dfs(root);
    return sum;
};

console.log(parseInt("100", 2))