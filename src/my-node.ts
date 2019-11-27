interface INode<T> {
    getKey(): number;
    getData(): T;
    getLeft(): INode<T>;
    getRight(): INode<T>;
}

export class MyNode<T> implements INode<T> {
    private data: T;
    readonly key: number;
    private left: MyNode<T>;
    private right: MyNode<T>;

    constructor(key: number, data?: T) {
        this.key = key;
        this.left = null;
        this.right = null;
        data ? this.data = data : this.data = null;
    }

    getKey(): number {
        return this.key;
    }
    getData(): T {
        if (this.data) {
            return this.data;
        }
        return null;
    }
    getLeft(): MyNode<T> {
        return this.left;
    }
    getRight(): MyNode<T> {
        return this.right;
    }
    setLeft(left: MyNode<T>): void {
        this.left = left;
    }
    setRight(right: MyNode<T>): void {
        this.right = right;
    }
    setData(data: T): void {
        this.data = data;
    }
}
