export class MyNode {
    constructor(key, data) {
        this.key = key;
        this.left = null;
        this.right = null;
        data ? this.data = data : this.data = null;
    }
    get Key() {
        return this.key;
    }
    get Data() {
        if (this.data) {
            return this.data;
        }
        return null;
    }
    set Data(data) {
        this.data = data;
    }
    get LeftChild() {
        return this.left;
    }
    set LeftChild(left) {
        this.left = left;
    }
    get RightChild() {
        return this.right;
    }
    set RightChild(right) {
        this.right = right;
    }
}
