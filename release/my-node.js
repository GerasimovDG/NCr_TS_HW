export class MyNode {
    constructor(key, data) {
        this.key = key;
        this.left = null;
        this.right = null;
        data ? this.data = data : this.data = null;
    }
    getKey() {
        return this.key;
    }
    getData() {
        if (this.data) {
            return this.data;
        }
        return null;
    }
    getLeft() {
        return this.left;
    }
    getRight() {
        return this.right;
    }
    setLeft(left) {
        this.left = left;
    }
    setRight(right) {
        this.right = right;
    }
    setData(data) {
        this.data = data;
    }
}
