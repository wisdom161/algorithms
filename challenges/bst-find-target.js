/**
 * Definition for a binary tree node,
 * function treeNode( val, left, right) {
 *      this.val = (val === undefined ? 0 : val)
 *      this.left = (left === undefined ? null : left)
 *      this.right = (right === undefined ? null : right)
 * }
 */

const findTarget = (root, k) => {
    const memo = {};

    const helper = tree => {
        if (!tree) return null;

        if (memo[tree.val] !== undefined) return true
        memo[k - tree.val] = tree.val;
        // pre order traversal - if logic is here

        if (helper(tree.left)) return true;
        // in order traversal - if logic is here
        if (helper(tree.right)) return true;
        // post order traversal - if logic is here
    }
    return helper(root) ? true : false;
}

/**
 * 
const cloneTree = (root) => {
    const array = []
    const preorderClone = (t) => {
        if (t === null) return null
        const clone = new TreeNode(t.val);
        // dosomeThingFunc(t.val)
        //preorder logic
        clone.left_ptr = preorderClone(t.left_ptr)
        array.push(t.val)
        // dosomeThingFunc(t.val)
        //inorder logi
        clone.right_ptr = preorderClone(t.right_ptr);
        dosomeThingFunc(t.val)
        //postorder logic
        return clone
    }
    return preorderClone(root)
}

8 5 1 7 10 12
1 5 7 8 10 12
1 7 5 12 10 8
 */

/**
 * 
class TreeNode {
    constructor(val, left_ptr, right_ptr) {
        this.val = (val === undefined ? 0 : val)
        this.left_ptr = (left_ptr === undefined ? null : left_ptr)
        this.right_ptr = (right_ptr === undefined ? null : right_ptr)
    }

    add(value, reverse = false) {
        if (!this.val) { this.val = value }
        else if (this.left_ptr && this.right_ptr && reverse) this.right_ptr.add(value, reverse)
        else if (this.left_ptr && this.right_ptr) this.left_ptr.add(value, reverse)
        else if (!this.left_ptr) this.left_ptr = new TreeNode(value)
        else this.right_ptr = new TreeNode(value)
        return this
    }
}
 */