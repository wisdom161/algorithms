class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
        this.name;
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        array.push(this.name);
        
        for (const child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }
}